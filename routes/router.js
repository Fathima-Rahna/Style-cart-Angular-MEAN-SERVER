

// const express = require('express');

// const productController = require('../controllers/productController');
// const userController = require('../controllers/userController');
// const jwtMiddleware = require('../middlewares/jwtMiddleware');

// const wishlishtController = require('../controllers/wishlistController');
// const cartController = require('../controllers/cartController');
// const router = express.Router();




// // Define the route for getting all products
// router.get('/all-products', productController.getAllProductController);
// //register
// router.post('/register',userController.registerController)


// //login
// router.post('/login',userController.loginController)


// //add to wishlisht
// router.post('/user/add-to-wishlist',jwtMiddleware,wishlishtController.addToWishlist)

// //get wishlist
// router.get('/get-wishlist',jwtMiddleware,wishlishtController.getWishlist)


// //get a product
// router.get('/:id/get-product',productController.getAproduct)


// //removewishlist
// router.delete('/remove-wishlist/:id/item',jwtMiddleware,wishlishtController.removeWishlist)



// //add to cart
// router.post('/user/add-to-cart',jwtMiddleware,cartController.addToCart)

// //get cart
// router.get('/get-cart',jwtMiddleware,cartController.getCart)


// module.exports = router;


const express = require('express');
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');
const wishlistController = require('../controllers/wishlistController');
const cartController = require('../controllers/cartController');
const router = express.Router();

// Define the route for getting all products
router.get('/all-products', productController.getAllProductController);

// Register
router.post('/register', userController.registerController);

// Login
router.post('/login', userController.loginController);

// Add to wishlist
router.post('/user/add-to-wishlist', jwtMiddleware, wishlistController.addToWishlist);

// Get wishlist
router.get('/get-wishlist', jwtMiddleware, wishlistController.getWishlist);

// Get a product
router.get('/:id/get-product', productController.getAproduct);

// Remove from wishlist
router.delete('/remove-wishlist/:id/item', jwtMiddleware, wishlistController.removeWishlist);

// Add to cart
router.post('/user/add-to-cart', jwtMiddleware, cartController.addToCart);

// Get cart
router.get('/get-cart', jwtMiddleware, cartController.getCart);

//removecartItem
router.delete('/remove-cart/:id/item',jwtMiddleware,cartController.removeCartItem)


//incre
router.get('/:id/increment-cart',jwtMiddleware,cartController.incrementCartItem)
router.get('/:id/decrement-cart',jwtMiddleware,cartController.decrementCartItem)

//empty

router.delete('/empty-cart',jwtMiddleware,cartController.emptyCart)
module.exports = router;
