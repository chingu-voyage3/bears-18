
import { ExtractJwt } from "passport-jwt";
export const config = {
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/tiqa0',
    port: process.env.PORT || 8000,
  };
export  const jwtOptions = {
  jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme("JWT"),
  secretOrKey :'tiqa_notrust'}
