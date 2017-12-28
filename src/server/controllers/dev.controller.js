import Dev from '../models/dev.model';
const uuidv4 = require('uuid/v4');
import sanitizeHtml from 'sanitize-html';
import promisify from 'es6-promisify'

/**
 * Get all devs
 * @param req
 * @param res
 * @returns void
 */
export function getDevs(req, res) {
  Dev.find().sort('-dateAdded').exec((err, devs) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ devs });
  });
}
/**
 * Register a dev
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
  
  const developer = new Dev({ email: req.body.email })
  developer.devid = uuidv4();
  // this part is handled with the passeport framework
  const register = promisify(Dev.register,Dev)
  await register(developer,req.body.password)
 // and we save the new user

  developer.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
   // res.json({ dev: saved });
   next()
  });
  
 
  }

/**
 * Save a dev
 * @param req
 * @param res
 * @returns void
 */
export function addDev(req, res) {
  if (!req.body.name || !req.body.email || !req.body.desc) {
     res.status(403).end();}
    const newDev = new Dev({name:req.body.name,email:req.body.email,desc:req.body.desc,image:req.body.image,fees:req.body.fees});
    // Let's sanitize inputs
  newDev.email = sanitizeHtml(newDev.email);
  newDev.name = sanitizeHtml(newDev.name);
  newDev.desc = sanitizeHtml(newDev.desc);
  newDev.fees = sanitizeHtml(newDev.fees);
 // newDev.status = sanitizeHtml(newDev.status);
  newDev.image = sanitizeHtml(newDev.image);
  newDev.devid = uuidv4();
  newDev.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ dev: saved });
    
  });
// res.json(newDev)
}


/**
 * Get a single dev
 * @param req
 * @param res
 * @returns void
 */
export function getDev(req, res) {
  Dev.findOne({ devid: req.params.devid }).exec((err, dev) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ dev });
  });
}

/**
 * Delete a dev
 * @param req
 * @param res
 * @returns void
 */
export function deleteDev(req, res) {
  Dev.findOne({ devid: req.params.devid }).exec((err, dev) => {
    if (err) {
      res.status(500).send(err);
    }

    dev.remove(() => {
      res.status(200).end();
    });
  });
}
