import mongoose from 'mongoose';
import validator from 'validator'
import mongodbErrorHandler from 'mongoose-mongodb-errors'
import passportLocalMongoose from 'passport-local-mongoose'
const Schema = mongoose.Schema;
/**
 * The developer schema only the email is required field
 * the other fields are :name,desc,image,adresse, country are strings.
 * projects is an array of object ids referencing projects.
 * skills is an array of strings of the developer skills.
 * the password is handled by the passeport framework.
 */

const devSchema = new Schema({
  name: { 
    type: 'String',
    trim:true,
      },
  email: { 
    type: 'String',
    trim:true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Invalid Email Address'],
    required: true
   },
  desc: {
    type: 'String',
    trim:true,
    
   },
  image: {
    type: 'String',
    trim:true
   },
  fees: {
    type: 'Number'
   },
  status: { 
    type: 'Boolean' ,
    default:false
  },
  devid: { 
    type: 'String', 
    required: true
   },
  dateAdded: {
    type: 'Date',
    default: Date.now,
    required: true
   },
  projects:[{ 
    type: Schema.ObjectId,
     ref: 'Project' }],
  skills:[{ 
    type: 'String',
   }],   
  adresse:{
    type:'String'
  },   
  country:{
    type:'String'
  }
});
devSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
devSchema.plugin(mongodbErrorHandler);
export default mongoose.model('Dev', devSchema);
