import mongoose from 'mongoose';



const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
});

export default mongoose.model('Category', categorySchema);