const Product = require('../models/Product');

// Add a new suitcase
exports.addProduct = async (req, res) => {
  try {
    const { height, width, material, rate, stock } = req.body;

    const product = new Product({
      seller: req.user.id,
      height,
      width,
      material,
      rate,
      stock
    });

    await product.save();
    res.status(201).json({ message: 'Product added', product });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// View all seller products
exports.getSellerProducts = async (req, res) => {
  try {
    const products = await Product.find({ seller: req.user.id });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Mark a product as sold
exports.markAsSold = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id, seller: req.user.id },
      { isSold: true },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: 'Product not found or unauthorized' });
    }

    // Notify seller via socket
    global.io.emit(`sold-${product.seller}`, {
      message: `Your suitcase (${product._id}) has been marked as sold.`
    });

    res.json({ message: 'Product marked as sold', product });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Bulk price update by material
exports.updateRatesByMaterial = async (req, res) => {
  const { material, increase } = req.query;

  if (!material || !increase) {
    return res.status(400).json({ message: 'Material and increase value are required' });
  }

  try {
    const result = await Product.updateMany(
      { material, seller: req.user.id },
      { $inc: { rate: parseInt(increase) } }
    );
    res.json({ message: 'Rates updated', result });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
