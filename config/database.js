import mongoose from "mongoose";

export default  ()=> {
    const MONGO_URI = 'mongodb://localhost:27017/product-listing'

    mongoose
        .connect(MONGO_URI)
        .then(()=> {
            console.log('Database connected');
        })
        .catch((err)=> {
            console.log(`Database connection failed : ${err}`);
        })
}