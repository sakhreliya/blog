const express = require('express');
const connectDB = require('./db/dbConnect');
const apiRoutes = require('./routes/api');
const path = require('path');
const authenticateToken = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// MongoDB connect
connectDB();

app.use(express.json());

// Set the views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use middleware
app.use(authenticateToken);

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
