import  express  from "express";
import { addCategory, addSubCategory, getMainCategories } from "../controllers/category.js";

const router = express.Router()

//create category
router.post('/add-category',addCategory)
//view main categories
router.get('/get-top-level-category',getMainCategories)
//create subcategory
router.post('/add-subcategory',addSubCategory)


export default router