import Category from '../model/category.js';

export const addCategory = async (req, res) => {
  const  name  = req.body.categoryName

  try {
    // Create a top-level category 
    const newCategory = await Category.create({ name, parent: null })
     
    return res.status(201).json(newCategory)
  } catch (err) {

    console.log('Error creating top-level category:', err);

    return res.status(500).json({ error: 'Category creation failed' });
  }
}; 

export const getMainCategories = async(req,res) => {

    //find main categories
    try {
        const mainCategories = await Category.find({parent:null})
        
        return res.status(201).json(mainCategories)
    } catch (err) {
        console.log('Error get main category: ',err);
        
    }
} 

export const addSubCategory = (req,res) => {

  console.log(req.body);
}
