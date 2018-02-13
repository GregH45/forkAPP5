import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const favSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  departure: {
    type: String,
    required: true
  },
  arrival: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
});


export default mongoose.model('Favorite', favSchema);
