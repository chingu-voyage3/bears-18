import passport from 'passport'
import jwt from 'jsonwebtoken'
import { jwtOptions} from "../../server/config";
export function JWTlogin (req,res,next){

    passport.authenticate('jwt', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
          return next()
    });
  })(req, res, next);
}
export  function login (req, res, next) {
     
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('login'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }

        const payload = {id: user._id};
        const token = jwt.sign(payload, jwtOptions.secretOrKey,{ expiresIn: '30m' });     

            return res.json({'success' : user,'JWT':token});
      });
    })(req, res, next);
  }
export function logout(req,res){
    req.logout();
}