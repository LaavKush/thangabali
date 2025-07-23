exports.processPayment = (req, res) => {
  // Simulate 2-second delay and 80% success rate
  setTimeout(() => {
    const success = Math.random() > 0.2;

    if (success) {
      res.json({ success: true, message: 'Payment processed successfully' });
    } else {
      res.status(400).json({ success: false, message: 'Payment failed' });
    }
  }, 2000);
};
