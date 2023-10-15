import  express  from "express";
import { addCategory, getMainCategories } from "../controllers/category.js";

const router = express.Router()

//create category
router.post('/add-category',addCategory)
//view main categories
router.get('/get-top-level-category',getMainCategories)


export default router