const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const role = require('../middleware/role');
const { getAllUsers, deleteUser } = require('../controllers/adminController');

router.use(auth, role('admin'));

router.get('/users', getAllUsers);          // GET /admin/users
router.delete('/users/:id', deleteUser);    // DELETE /admin/users/:id

module.exports = router;
