import Cart, { find, findByIdAndDelete } from "../models/Cart";

// ADD product to cart
export async function addToCart(req, res) {
  try {
    const { productId, quantity } = req.body;

    const cartItem = new Cart({
      productId,
      quantity
    });

    await cartItem.save();

    res.json({
      message: "Product added to cart",
      cartItem
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


// GET cart items
export async function getCartItems(req, res) {
  try {
    const items = await find().populate("productId");

    res.json(items);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


// DELETE cart item
export async function deleteCartItem(req, res) {
  try {
    await findByIdAndDelete(req.params.id);

    res.json({
      message: "Item removed from cart"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}