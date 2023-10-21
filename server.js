const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const menuRoutes = require('./routes/menuRoutes'); 

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/', menuRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
