const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var matrialSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    code: {
        type: String,
    },

    price: {
        type: Number,
        required: true,
        min: 0,
    },
    stock: {
        type: Number,
        default: 0,
    },

    new: {
        type: Boolean,
        default: false,
    },
    onsale: {
        type: Boolean,
        default: false,
    },
    promo: {
        rate: {
            type: Number,
            default: 0,
        },
        price: {
            type: Number,
            default: 0,
        },
    },
    imageUrl: {
        type: String,
        default: "",
    },

    description: { type: String, default: "" },
    images: [String],
    categorie:
    {
        type: Schema.Types.ObjectId,
        ref: "Categorie",
        index: true,
    },
    state: {
        type: String,
        default: "not_available",
        enum: ["not_available", "out_of_commerce", "in_stock", "in_48_h", "on_arrival", "quote_request"],
    }
})

const Matrial = mongoose.model('Matrial', matrialSchema);

exports.Matrial = Matrial