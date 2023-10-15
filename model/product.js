import mongoose from "mongoose";

const productSchema =  mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  });
  
  export default mongoose.model('Product', productSchema);