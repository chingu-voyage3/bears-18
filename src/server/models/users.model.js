import mongoose from 'mongoose';
import validator from 'validator'
import mongodbErrorHandler from 'mongoose-mongodb-errors'
import passportLocalMongoose from 'passport-local-mongoose'
const Schema = mongoose.Schema;
/**
 * The user schema only the email is required field
 * the other fields are :name,desc,image,adresse, country are strings.
 * projects is an array of object ids referencing projects.
 * skills is an array of strings of the developer skills.
 * the password is handled by the passeport framework.
 */

const userSchema = new Schema({
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
  
  dateAdded: {
    type: 'Date',
    default: Date.now,
    required: true
   },
  projectsOwned:[{ 
    type: Schema.ObjectId,
     ref: 'Project' }],

  projectsDeveloped:[{ 
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
  },
  role:{
    type: 'String',
    enum: ['ADMIN', 'DEVELOPER','CLIENT']
      }
},{ collection: 'users' });
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
userSchema.plugin(mongodbErrorHandler);
export default mongoose.model('User', userSchema);
