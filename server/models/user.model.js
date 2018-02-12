import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const userSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
   // validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  car: {
    type: [{
      type: String,
      enum: ['small', 'large', 'meduim']
    }],
    default: ['meduim']
  },
  created_date: {
    type: Date,
    default: Date.now
  },
});


export default mongoose.model('User', userSchema);
