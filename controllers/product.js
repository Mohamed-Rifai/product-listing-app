import Category from '../model/category.js';
import Product from '../model/product.js'



export const getAllProduct = async (req, res) => {
    try {
      const products = await Product.find().populate('category');
      const categories = await Category.find();
  
      const mainCategories = categories.filter((category) => !category.parent);
      const subcategories = categories.filter((category) => category.parent);
  
      // Calculate the product counts for main categories
      const mainCategoriesWithProductCount = mainCategories.map((mainCategory) => {
        const productCount = products.filter((product) => {
          return (
            product.category._id.toString() === mainCategory._id.toString() ||
            (product.category.parent &&
              product.category.parent.toString() === mainCategory._id.toString())
          );
        }).length;
  
        return { ...mainCategory.toObject(), productCount };
      });
  
      // Calculate the product counts for subcategories
      const subcategoriesWithProductCount = subcategories.map((subcategory) => {
        const productCount = products.filter(
          (product) => product.category._id.toString() === subcategory._id.toString()
        ).length;
  
        return { ...subcategory.toObject(), productCount };
      });
  
      const response = {
        products,
        mainCategories: mainCategoriesWithProductCount,
        subcategories: subcategoriesWithProductCount,
      };
  
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'server error' });
    }
  };
  





export const addProduct = async(req,res) => {

    const {name,description,price,category} = req.body
         console.log(req.body);

    try {
       
        const newProduct = new Product({
            name,
            description,
            price,
            category
        }) 

        const savedProduct = await newProduct.save();

        if (savedProduct) {
            return res.status(200).json({ message: "Product successfully added" }); 
          }
        


    } catch (err) {
        console.log('save product failed:',err);
    }


}




















// export const getAllProduct = async (req, res) => {
//     try {
//       const products = await Product.aggregate([
//         {
//           $lookup: {
//             from: 'categories',
//             localField: 'category',
//             foreignField: '_id',
//             as: 'category',
//           },
//         },
//         {
//           $unwind: '$category',
//         },
//         {
//           $project: {
//             _id: 1,
//             name: 1,
//             description: 1,
//             price: 1,
//             category: '$category',
//           },
//         },
//       ]);
  
//       // Group products by the main category (based on parent) and count
//       const groupedProducts = await Product.aggregate([
//         {
//           $group: {
//             _id: '$category.parent',
//             count: { $sum: 1 },
//           },
//         },
//       ]);
  
//       // Fetch the main categories
//       const mainCategories = await category.find({ parent: null });
  
//       // Create a response object to send to the frontend
//       const response = {
//         products,
//         mainCategories,
//         groupedProducts,
//       };
  
//       res.status(200).json(response);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   }
  



// populate: {
//     path: 'parent',
//     model: 'Category',
//   },