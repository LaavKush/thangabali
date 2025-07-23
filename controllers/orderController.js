const Order = require('../models/Order');
const Product = require('../models/Product');

exports.placeOrder = async (req, res) => {
  const { productId, paymentMethod } = req.body;

  // ✅ Validate payment method
  if (!['cod', 'online'].includes(paymentMethod)) {
    return res.status(400).json({ message: 'Invalid payment method' });
  }

  try {
    // ✅ Log incoming data
    console.log("Incoming Product ID:", productId);

    const product = await Product.findById(productId);

    // ✅ Log fetched product
    console.log("Fetched Product:", product);

    if (!product || product.isSold || product.stock <= 0) {
      return res.status(400).json({ message: 'Product unavailable' });
    }

    const order = new Order({
      buyer: req.user.id,
      product: productId,
      paymentMethod
    });

    await order.save();

    // ✅ Decrement stock
    product.stock -= 1;
    if (product.stock === 0) {
      product.isSold = true;
    }
    await product.save();

    res.status(201).json({ message: 'Order placed', order });

  } catch (err) {
    console.error("Order Placement Error:", err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.user.id })
      .populate('product');
    
    res.json(orders);
  } catch (err) {
    console.error("Get Orders Error:", err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
