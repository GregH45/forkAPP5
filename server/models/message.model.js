import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const msgSchema = new Schema({
  object: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  reciever: {
    type: String,
    required: true
  },
  category: {
    type: String,
    type: [{
      type: String,
      enum: ['info', 'placeHolder1', 'placeHolder2']
    }],
    default: ['info']
  },
  created_date: {
    type: Date,
    default: Date.now
  },
});


export default mongoose.model('Message', msgSchema);
