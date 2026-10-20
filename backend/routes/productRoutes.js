const express = require('express');
const {protect} = require('../middleware/authMiddleware');
const {admin} = require('../middleware/adminMiddleware');
const{getproducts,getproductById,createproduct,updateproduct,deleteproduct} = require('../controllers/productController')
const multer = require('multer');
const upload = multer({dest:'uploads/'});


const router = express.Router();

//All products
router.route('/').get(getproducts).post(protect,admin,upload.single('image'),createproduct);
//Specific product
router.route('/:id').get(getproductById).put(protect,admin,upload.single('image'),updateproduct).delete(protect,admin,deleteproduct);

module.exports = router;