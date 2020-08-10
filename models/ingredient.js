const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name: {type: String, required: true, maxlength: 100},
    // ingredient_category: {type: Schema.Types.ObjectId, ref: 'IngredientCategory'},
    shelf_life_days: {type: Number, required: true, min: 1}
    // image: {type: Schema.Types.ObjectId, ref: 'Image'}
});

module.exports = mongoose.model('Ingredient', IngredientSchema);