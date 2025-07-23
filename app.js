// const express = require('express');
// const cors = require('cors');
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/auth', require('./routes/auth'));
// app.use('/seller', require('./routes/seller'));
// app.use('/orders', require('./routes/buyer'));
// app.use('/admin', require('./routes/admin'));
// app.use('/payments', require('./routes/payment'));

// app.get('/', (req, res) => {
//   res.send('🎒 Welcome to Thangabali Suitcase Marketplace API');
// });

// module.exports = app;

const express = require('express');
const cors = require('cors');
const app = express();

// CORS Configuration
app.use(cors({
  origin: 'http://localhost:3000', // frontend origin
  credentials: true,               // allow cookies, tokens, etc.
}));

// Middleware
app.use(express.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/seller', require('./routes/seller'));
app.use('/orders', require('./routes/buyer'));
app.use('/admin', require('./routes/admin'));
app.use('/payments', require('./routes/payment'));

// Root Route
app.get('/', (req, res) => {
  res.send('🎒 Welcome to Thangabali Suitcase Marketplace API');
});

module.exports = app;

