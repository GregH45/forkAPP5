import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { 
  	type: String, 
  	required: true 
  },
  lastName: { 
  	type: String, 
  	required: true 
  },
  mailUPS: { 
  	type: String,
     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  	required: true 
  },
  mailPerso: { 
  	type: String,
     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  	required: true 
  },
  points: { 
  	type: Number, 
  	required: true,
  	default: 0 
  },
  car:[{type: Schema.Types.ObjectId, ref:'Car'}]
  dateCreated: { 
  	type: 'Date', 
  	default: Date.now, 
  	required: true 
  },
});

export default mongoose.model('User', userSchema);
