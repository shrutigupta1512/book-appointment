const express = require('express');
const { insertUser, getUsers, deleteUser } = require('../controllers/userController');

const router = express.Router();

// Route to insert a new user
router.post('/', insertUser);

// Route to get all users
router.get('/', getUsers);

// Route to delete a user by ID
router.delete('/:id', deleteUser);

module.exports = router;
