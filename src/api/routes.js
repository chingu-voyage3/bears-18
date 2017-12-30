var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var dev = require('./controllers/devController');
var auth = require('./controllers/authController');
var config = require('./config');

var urlencodedParser = bodyParser.json();

module.exports = function(app, apiRoutes, authRoutes) {
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, PATCH');
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
    });
    
    authRoutes.post('/login', auth.login);
    apiRoutes.post('/register', auth.registration);

    authRoutes.use(function(req, res, next){
        var token = req.headers['x-access-token'] ? req.headers['x-access-token'] : null;
        if (token) {
            jwt.verify(token, config.AUTH_SECRET_KEY, function(err, decoded) {      
                if (err) {
                    return res.status(403).send({
                        'error': 'Authentication Failed or Token Expired'
                    });   
                } else {
                    req.decoded = decoded;    
                    next();
                }
            });
        
        } else {
            return res.status(403).send({ 
                'error': 'Authentication Failed' 
            });
        }
    });

    authRoutes.get('/dev', dev.index);
    authRoutes.get('/dev/find', dev.find);
    authRoutes.patch('/dev/update', urlencodedParser, dev.update);
    authRoutes.patch('/dev/password/change', urlencodedParser, dev.changePassword);
    authRoutes.post('/dev/remove', urlencodedParser, dev.remove);
    authRoutes.get('/dev/view/:id', dev.view);

    app.use('/api/v1/auth', authRoutes);

    apiRoutes.get('/', function(req, res) {
        res.status(404).send({ 'error': 'You took the wrong step' });
    });
    apiRoutes.post('/', function(req, res) {
        res.status(404).send({ 'error': 'You took the wrong step' });
    });

    app.use('/api/v1', apiRoutes);
};