// controllers/userController.js

// Insert a new user
const insertUser = (req, res) => {
    const { username, phone, email } = req.body;
    const query = 'INSERT INTO user (username, phone, email) VALUES (?, ?, ?)';
    req.db.query(query, [username, phone, email], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, username, phone, email });
    });
};

// Get all users
const getUsers = (req, res) => {
    req.db.query('SELECT * FROM user', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Delete a user by ID
const deleteUser = (req, res) => {
    const userId = req.params.id;
    const query = 'DELETE FROM user WHERE id = ?';
    req.db.query(query, [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    });
};

module.exports = {
    insertUser,
    getUsers,
    deleteUser
};
