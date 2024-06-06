const cartItems = require('../models/cartModel')

exports.addToCart = async (req, res) => {
    const {id,title,price,image,quantity, category, description} = req.body;
    const userId = req.payload;

    try {
        const existingProduct = await cartItems.findOne({id,userId});
        if (existingProduct) {
            existingProduct.quantity+=1
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            await existingProduct.save()
            res.status(200).json("Items added to your cart...");
        } else {
            const newProduct = new cartItems({
                id, title, price, image, quantity, totalPrice:price, userId, category, description
            });
            await newProduct.save();
            res.status(200).json("Item added to your cart...");
        }
    } catch (err) {
        res.status(401).json(err);
    }
};






//getcart
exports.getCart = async (req, res) => {
    const userId = req.payload
    try {
        const allProducts = await cartItems.find({userId});
        res.status(200).json(allProducts)
    } catch(err){
        res.status(401).json(err)
    }
};

// const cartItems = require('../models/cartModel');

// exports.addToCart = async (req, res) => {
//     const { id, title, price, image, quantity, category, description } = req.body;
//     const userId = req.payload;

//     try {
//         const existingProduct = await cartItems.findOne({ id, userId });
//         if (existingProduct) {
//             existingProduct.quantity += 1;
//             existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
//             await existingProduct.save();
//             res.status(200).json({ message: "Item quantity updated in your cart.", product: existingProduct });
//         } else {
//             const newProduct = new cartItems({
//                 id, title, price, image, quantity, totalPrice: price, userId, category, description
//             });
//             await newProduct.save();
//             res.status(200).json({ message: "Item added to your cart.", product: newProduct });
//         }
//     } catch (err) {
//         if (err.name === 'ValidationError') {
//             const messages = Object.values(err.errors).map(val => val.message);
//             return res.status(400).json({ errors: messages });
//         }
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.getCart = async (req, res) => {
//     const userId = req.payload;
//     try {
//         const allProducts = await cartItems.find({ userId });
//         res.status(200).json(allProducts);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };


///REMOVE CART ITEM
exports.removeCartItem = async (req,res)=>{
    const {id} = req.params
    try{
        const removeItem = await cartItems.findByIdAndDelete({_id:id})
        res.status(200).json(removeItem)
    }catch(err){
        res.status(401).json(err)
    }

}


exports.incrementCartItem = async (req,res)=>{
    const {id} = req.params
    try{
        const selectedProduct = await cartItems.findOne({_id:id})
        selectedProduct.quantity += 1
        selectedProduct.totalPrice = selectedProduct.quantity * selectedProduct.price
        await selectedProduct.save()
        res.status(200).json(selectedProduct)
    }catch(err){
        res.status(401).json(err)
    }



}



exports.decrementCartItem = async (req,res)=>{
    const {id} = req.params
    try{
        const selectedProduct = await cartItems.findOne({_id:id})
        selectedProduct.quantity -= 1
        if(selectedProduct.quantity==0){
            await cartItems.deleteOne({_id:id})
            res.status(200).json("Item removed")
        }else{
            selectedProduct.totalPrice = selectedProduct.quantity * selectedProduct.price
            await selectedProduct.save()
            res.status(200).json(selectedProduct)
        }
       
    }catch(err){
        res.status(401).json(err)
    }

    

}

exports.emptyCart = async (req,res)=>{
    const userId = req.payload
    try{
        const result = await cartItems.deleteMany({userId})
        res.status(200).json("All items Removed Successffully")

    }catch(err){
        res.status(401).json(error)
    }
}
