import Product, { find } from "../models/Product";

// GET all products
export async function getProducts(req, res) {
  try {
    const products = await find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// ADD new product
export async function addProduct(req, res) {
  try {
    const { name, price, image, description } = req.body;

    const product = new Product({
      name,
      price,
      image,
      description
    });

    await product.save();

    res.status(201).json({
      message: "Product added successfully",
      product
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}