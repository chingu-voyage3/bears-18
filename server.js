// Import required modules
import Express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import dummyData from './dummyData'
import bodyParser from 'body-parser';
import path from 'path';
import expressValidator from 'express-validator'
import {passportLocalInit,passportJwtInit} from './src/server/handlers/passport'
import devs from './src/server/routes/dev.routes';
import {config as serverConfig} from './src/server/config';
import passport from 'passport'

// Initialize the Express App
const app = new Express();
//passportInit()
// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  // feed some dummy data in DB.
  dummyData();
});

// Apply body Parser and server public assets and routes
// to solve cros problems
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});*/
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, '../dist/client')));
/////  passport initialization
app.use(passport.initialize());
passportLocalInit();
passportJwtInit();

/////////

app.use(expressValidator());
app.use('/api', devs);


// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`MERN is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
  }
});

export default app;
