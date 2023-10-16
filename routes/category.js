import  express  from "express";
import { addCategory, addSubCategory, getAllCategory } from "../controllers/category.js";

const router = express.Router()

//create category
router.post('/add-category',addCategory)
//view main categories
router.get('/get-all-category',getAllCategory)
//create subcategory
router.post('/add-subcategory',addSubCategory)


export default router