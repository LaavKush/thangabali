const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();
const server = http.createServer(app);

// SOCKET.IO
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});
global.io = io;

io.on('connection', socket => {
  console.log('🔌 New socket connection');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    server.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ DB Error:', err);
  });
