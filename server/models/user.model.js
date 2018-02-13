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
  	required: true 
  },
  mailPerso: { 
  	type: String, 
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
