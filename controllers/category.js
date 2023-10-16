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

export const getAllCategory = async(req,res) => {

    //find main categories
    try {
        const allCategories = await Category.find({}).populate('parent')
        
        return res.status(201).json(allCategories)
    } catch (err) {
        console.log('Error get main category: ',err);
        
    }
} 



export const addSubCategory = async (req, res) => {
  const { subCategoryName, categoryId } = req.body;

  try {
  
    // Create the subcategory
    const newSubCategory = await Category.create({ name: subCategoryName, parent: categoryId });
      console.log(newSubCategory);
    return res.status(201).json(newSubCategory);
  } catch (err) {
    console.log('Error creating subcategory:', err);
    return res.status(500).json({ error: 'Subcategory creation failed' });
  }
};
