import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const carSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  constructor: {
    type: String,
    required: true
  },
  immatriculation: {
    type: String,
    required: true
  },
  category: {
    type: String,
    type: [{
      type: String,
      enum: ['utilitaire', '4x4', 'citadine']
    }],
    default: ['citadine']
  },
  kilometers: {
  	type: Number  	
  }
  created_date: {
    type: Date,
    default: Date.now
  },
});


export default mongoose.model('Vehicle', carSchema);
