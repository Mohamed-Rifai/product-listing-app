import Product from '../model/product.js'


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
        console.log(err);
    }


}

export const getAllProduct = async(req,res) => {

    try {
        
    const allProduct = await Product.find()

    res.status(201).json(allProduct)

    } catch (err) {
        console.log(err);
    }
}