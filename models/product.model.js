const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "a name is required"],
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    }
},
    {
        Timestamp: true,
    }
);

const productModel = mongoose.model("Product",productSchema);

module.exports = productModel;