var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var CryptoJs = require('crypto-js');
var dev = require('./../models/dev');
var config = require('./../config');

const payload = {
    loggedIn: true
};

var login = function(req, res) {
    dev.find(findOne({
        "email": req.body.email
    })).exec(function(err, data) {
        if (err) {
            res.status(500).send({ 'error': err.message });
        } else {
            if (data) {                
                var bytes = CryptoJS.AES.decrypt(req.body.password.toString(), config.ENCRYPTION_KEY);
                var password = bytes.toString(CryptoJS.enc.Utf8);
                var salt = bcrypt.genSaltSync(12);
                if (bcrypt.compareSync(req.body.oldPassword, data.password)) {
                    var token = jwt.sign(payload, config.AUTH_SECRET_KEY, {
                        expiresInMinutes: 1440
                    });
                    res.status(200).send({
                        'success': 'Login successful',
                        token: token
                    });
                } else {
                    res.status(401).send({
                        'error': 'devname or Password Failed'
                    });
                }
            } else {
                res.status(401).send({
                    'error': 'devname or Password Failed'
                });
            }
        }
    });
};

var registration = function(req, res) {    
    dev.findOne({
        "email": req.body.email
    }).exec(function(err, data) {
        if (err) {
            res.status(500).send({ 'error': err.message });
        } else {
            if (data) {
                res.status(202).send({ 'error': 'Email already in use' });
            } else {
                var bytes = CryptoJS.AES.decrypt(req.body.password.toString(), config.ENCRYPTION_KEY);
                var password = bytes.toString(CryptoJS.enc.Utf8);
                var salt = bcrypt.genSaltSync(12);
                var devData = {
                    "name": req.body.name,
                    "email": req.body.email,
                    "password": bcrypt.hashSync(password, salt),                    
                    "desc": req.body.desc,
                    "image": req.body.image,
                    "skills": req.body.skills,
                    "location" : {
                        "country": req.body.country,
                        "city": req.body.city
                    }
                };

                dev(devData).save(function(err, data) {
                    if (err) {
                        res.status(500).send({ 'error': err.message });
                    } else {
                        res.status(201).send({ 'success': 'dev registered successfully, you can now login' });
                    }
                });
            }
        }
    });
};


module.exports = {
    login: login,
    registration: registration
};