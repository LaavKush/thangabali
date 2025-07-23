const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const role = require('../middleware/role');
const { placeOrder, getOrders } = require('../controllers/orderController');

router.use(auth, role('buyer'));

router.post('/', placeOrder);   // POST /orders
router.get('/', getOrders);     // GET  /orders

module.exports = router;
