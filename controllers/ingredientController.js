const Ingredient = require('../models/ingredient');

exports.index = async (req, res) => {
    res.render('index', { title: 'Ingredients Home' });
} 