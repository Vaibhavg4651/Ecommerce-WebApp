import CartItem from "../models/Cart.js"
import asyncHandler from "express-async-handler"

const addToCart = asyncHandler(async (req, res) => {
        const { productId, quantity } = req.body;
        console.log(req.body);
        const userId = req.user.id;
        console.log(userId);
    try {
        let cartItem = await CartItem.findOne({ userId, productId });
        if (cartItem) {
            cartItem.quantity = quantity;
            cartItem.updatedAt = Date.now();
        } else {
            cartItem = new CartItem({ userId, productId, quantity });
        }
        await cartItem.save();
        res.status(200).json(cartItem);
    } catch (error) {
        res.status(500).json({ error: 'Unable to add item to cart' });
    }
});


const getCart = asyncHandler(async (req, res) => {
        const userId = req.params.id;
    try {
        const cartItems = await CartItem.find({ userId });
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch cart items' });
    }
});


const updateCartItem = asyncHandler(async (req, res) =>{
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    try {
        const cartItem = await CartItem.findOneAndUpdate(
            { userId, productId },
            { quantity, updatedAt: Date.now() },
            { new: true }
        );
        res.status(200).json(cartItem);
    } catch (error) {
        res.status(500).json({ error: 'Unable to update cart item' });
    }
});


const deleteCartItem = asyncHandler(async (req, res) => {
    const userId = req.body.userid;
    const productId = req.body.productid;

    try {
        const item = CartItem.findOne({ userId, productId });
        if(item){
        await item.deleteMany();
            res.status(200).json({ message: 'Item removed from cart' });
        }else{
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Unable to delete cart item' });
    }
});


export { addToCart, getCart, updateCartItem, deleteCartItem };