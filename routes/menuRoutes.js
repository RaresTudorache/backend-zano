const express = require('express');
const router = express.Router();

const Menu = require('../models/menuItem');

router.get('/menuitems', async (req, res) => {
    try {
        const menuItems = await Menu.find(); 
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
