import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const carSchema = new Schema({
  serie: { 
  	type: String, 
  	required: true 
  },
  constructor: { 
  	type: String, 
  	required: true 
  },
  type: { 
  	type: Date, 
  	required: true 
  },
  dateCreated: { 
  	type: 'Date', 
  	default: Date.now, 
  	required: true 
  },
});

export default mongoose.model('Car', carSchema);
