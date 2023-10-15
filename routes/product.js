import  express  from "express";
import { addProduct, getAllProduct } from "../controllers/product.js";

const router = express.Router()


//add product 
router.post('/add-product',addProduct)
//view all products
router.get('/get-all-products',getAllProduct)

export default router