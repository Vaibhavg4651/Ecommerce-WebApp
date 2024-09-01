import asyncHandler from 'express-async-handler'
import Product from '../models/Products.js'


const getProducts = asyncHandler(async (req, res) => {

  const products = await Product.find({}).sort({createdAt:-1})
  res.status(200).json({"success":true,"message":products })
});


const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json({"success":true,"message":product})
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
});




const addProduct = asyncHandler(async (req, res) => {
  const products = req.body.products; // assuming an array of products is sent in req.body.products

  if (!Array.isArray(products) || products.length === 0) {
    return res.status(400).json({ message: 'No products to add' });
  }

  const addedProducts = [];

  for (const productData of products) {
    const product = new Product({
      name: productData.name,
      price: productData.price,
      image: productData.image,
    });

    const savedProduct = await product.save();
    addedProducts.push(savedProduct);
  }

  res.status(201).json({
    message: 'Products added successfully',
    products: addedProducts,
  });
});

export {
  getProducts,
  getProductById,
  addProduct
};