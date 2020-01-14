const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    type:{
        type:String,
        enum:['POINT'],
        required: true
    },
    coordinates: {
        type:[Numer],
        required: true
    },
});

module.exports = pointSchema;