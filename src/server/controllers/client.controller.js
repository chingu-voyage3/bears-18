import User from '../models/users.model';
const uuidv4 = require('uuid/v4');
import sanitizeHtml from 'sanitize-html';
import promisify from 'es6-promisify'

/**
 * Get all clients
 * @param req
 * @param res
 * @returns void
 */
export function getClients(req, res) {
  User.find({role:'CLIENT'}).sort('-dateAdded').exec((err, clients) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ clients });
  });
}
/**
 * Register a client
 * @param req
 * @param res
 * @returns void
 */
export function validateRegister(req,res,next){
req.checkBody('email','The email is not valid').isEmail()
req.sanitizeBody('email')
req.checkBody('password').notEmpty()
req.checkBody('password-confirm','password and confir password dont match').equals(req.body.password)
const errors = req.validationErrors()
if(errors){
  res.json({errors:{...errors.map(err=>err.msg)}})
}
next()
}
export  async function  register(req,res,next){
  
  const client = new User({ email: req.body.email })
 
  // this part is handled with the passeport framework
  const register = promisify(User.register,User)
  await register(client,req.body.password)
 // and we save the new user

  client.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
   // res.json({ client: saved });
   next()
  });
  
 
  }

/**
 * Save a client
 * @param req
 * @param res
 * @returns void
 */
export function addClient(req, res) {
  if (!req.body.name || !req.body.email || !req.body.desc) {
     res.status(403).end();}
    const newClient = new User({name:req.body.name,email:req.body.email,desc:req.body.desc,image:req.body.image,fees:req.body.fees});
    // Let's sanitize inputs
  newClient.email = sanitizeHtml(newClient.email);
  newClient.name = sanitizeHtml(newClient.name);
  newClient.desc = sanitizeHtml(newClient.desc);
  newClient.fees = sanitizeHtml(newClient.fees);
 // newClient.status = sanitizeHtml(newClient.status);
  newClient.image = sanitizeHtml(newClient.image);
  newClient.role = 'CLIENT'
  newClient.clientid = uuidv4();
  newClient.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ client: saved });
    
  });
// res.json(newClient)
}


/**
 * Get a single client
 * @param req
 * @param res
 * @returns void
 */
export function getClient(req, res) {
  User.findOne({ _id: req.params.clientid }).exec((err, client) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ client });
  });
}

/**
 * Delete a client
 * @param req
 * @param res
 * @returns void
 */
export function deleteClient(req, res) {
  User.findOne({ _id: req.params.clientid }).exec((err, client) => {
    if (err) {
      res.status(500).send(err);
    }

    client.remove(() => {
      res.status(200).end();
    });
  });
}
