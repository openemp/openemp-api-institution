const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/openemp-api-institution', {
    useNewUrlParser: true,
    useCreateIndex: true
})

