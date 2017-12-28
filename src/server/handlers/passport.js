import passport from 'passport'
//import mongoose from 'mongoose'
import Dev from '../models/dev.model'
import { jwtOptions} from "../../server/config";
import { Strategy as JWTStrategy} from "passport-jwt";
//import JwtStrategy from 'passportJWT.Strategy'
export function passportJwtInit(){
    
const jwtLogin = new JWTStrategy(jwtOptions, async (payload, done) => {
    try {
      const user = await Dev.findById(payload.id);
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  });
  passport.use(jwtLogin)
}
export  function passportLocalInit(){
passport.use(Dev.createStrategy())
passport.serializeUser(Dev.serializeUser())
passport.deserializeUser(Dev.deserializeUser())
}