const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const categorieSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
      },
}) 
const Categorie = mongoose.model('Categorie', categorieSchema);

exports.Categorie = Categorie
 