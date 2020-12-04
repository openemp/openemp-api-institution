const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstitutionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
    ,
    adress: {
        type: String,
        required: true
    }
    ,
    email: {
        type: String,
        required: true
    }
    ,
    createdAt: {
        type: Date,
        required: false
    }
    ,
    createdBy: {
        type: String,
        required: false
    }
    ,
    modifiedAt: {
        type: Date,
        required: false
    }
    ,
    modifiedBy: {
        type: String,
        required: false
    }
})

const Institution = mongoose.model('Institution', InstitutionSchema)
module.exports = Institution;

