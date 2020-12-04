const express = require('express');
const app = express();
const institutionRoute = require('./Routes/Institution.route');
require('../src/Models/Institution.model')
require('../src/db/dbConnection')


app.use(express.json())
app.use(institutionRoute)

const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port} 🔥`);

