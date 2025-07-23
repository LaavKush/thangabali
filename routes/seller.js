const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const role = require('../middleware/role');
const {
  addProduct,
  getSellerProducts,
  markAsSold,
  updateRatesByMaterial
} = require('../controllers/productController');

router.use(auth, role('seller'));

router.post('/products', addProduct);
router.get('/products', getSellerProducts);
router.patch('/products/:id', markAsSold);
router.patch('/rates', updateRatesByMaterial); // Advanced

module.exports = router;
