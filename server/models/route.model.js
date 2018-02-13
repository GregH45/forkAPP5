import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const routeSchema = new Schema({
  departure: { 
  	type: String, 
  	required: true 
  },
  arrival: { 
  	type: String, 
  	required: true 
  },
  date: { 
  	type: Date, 
  	required: true 
  },
  deltaDate: { 
  	type: Number,
    min: 0,
    default: 0 
  },
  deltaPickup: { 
  	type: Number, 
  	min: 0,
  	default: 0,
    required: true, 
  },
  dateCreated: { 
  	type: 'Date', 
  	default: Date.now, 
  	required: true 
  },
});

export default mongoose.model('Route', routeSchema);
