// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');
const config = require('./sample-config.js');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection(config.db);

// Connect to MySQL and handle any connection errors
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});


function insertInitialData() {
    try {
        // Read JSON file
        const jsonData = JSON.parse(fs.readFileSync('./users.json', 'utf8'));

        // Check if jsonData is an array
        if (!Array.isArray(jsonData)) {
            throw new Error('JSON data is not an array');
        }

        // Insert each user into MySQL table
        const insertQueries = jsonData.map(user => {
            const { personal_code, first_name, last_name } = user;
            return new Promise((resolve, reject) => {
                const query = 'INSERT INTO users (personal_code, first_name, last_name) VALUES (?, ?, ?)';
                db.query(query, [personal_code, first_name, last_name], (err, result) => {
                    if (err) {
                        console.error('Error inserting user:', err);
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
        });

        // Execute all insert queries
        Promise.all(insertQueries)
            .then(() => {
                console.log('Initial data inserted successfully');
            })
            .catch((err) => {
                console.error('Error inserting initial data:', err);
            });
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
}

// FETCH USERS
app.get('/api/users', async (req, res) => {
    try {
        const apiUrl = 'https://api.zarrinmehr.zarrinroya.com/';
        const response = await axios.get(apiUrl);

        // Assuming the API returns JSON data
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching external data:', error.message);
        res.status(500).json({ error: 'Error fetching external data' });
    }
});

// LOGIN
app.post('/api/users/login', (req, res) => {
    const { personalCode } = req.body;

    // Check if personal code is provided
    if (!personalCode) {
        return res.status(400).json({ error: 'کد پرسنلی را وارد کنید' });
    }

    const query = 'SELECT * FROM users WHERE personal_code = ?';
    db.query(query, [personalCode], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal server error.' });
        }

        // Check if user exists
        if (results.length === 0) {
            return res.status(401).json({ error: 'کد پرسنلی وجود ندارد' });
        } else {
            const user = results[0];

            // Check if user is a special user who can log in unlimited times
            if (user.set_login === 10) {
                return res.json({ message: 'Login successful', user });
            }

            // Check if user has already logged in
            if (user.set_login === 1) {
                return res.status(401).json({ error: 'ورود مجدد به بازی امکان‌پذیر نیست' });
            }

            // Update login status for regular users
            db.query('UPDATE users SET set_login = 1 WHERE personal_code = ?', [personalCode], (err, updateResults) => {
                if (err) {
                    console.error('Error updating login status:', err);
                    return res.status(500).json({ error: 'Internal server error.' });
                }

                res.json({ message: 'Login successful', user });
            });
        }
    });
});


// FETCH USER BASED ON ID
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id; // Get the user ID from the URL params

    // Fetch the user details from the database based on the user ID
    db.query('SELECT * FROM users WHERE id = ?', [userId], (err, userResult) => {
        if (err) {
            console.error('Error fetching user details:', err);
            return res.status(500).json({ success: false, message: 'An error occurred while fetching user details' });
        }

        // Check if the user with the specified ID exists
        if (userResult.length === 0) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // If the user is found, return the user details
        const user = userResult[0];
        return res.status(200).json({ success: true, user });
    });
});


// API endpoint to update user details including set_login, excite_count, learn_count, peace_count
app.post('/api/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const { exciteCount, learnCount, peaceCount } = req.body;

    // Update subject counts in the database for the specified user ID
    const query = 'UPDATE users SET excite_count = ?, learn_count = ?, peace_count = ? WHERE id = ?';
    db.query(query, [exciteCount, learnCount, peaceCount, userId], (err, result) => {
        if (err) {
            console.error('Error updating subject counts:', err);
            return res.status(500).json({ success: false, message: 'An error occurred while updating subject counts' });
        }

        // Check if any rows were affected by the update operation
        if (result.affectedRows > 0) {
            return res.status(200).json({ success: true, message: 'Subject counts updated successfully' });
        } else {
            return res.status(400).json({ success: false, message: 'No user found with the specified ID' });
        }
    });
});


const PORT = config.server.port;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
