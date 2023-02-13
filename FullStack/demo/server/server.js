const express = require('express');
const cors = require('cors') // This is new
const app = express();
const port = 8000;

app.use(cors()) // This is new

require('./routes/person.routes')(app); // This is new

app.listen(port, () => console.log(`Listening on port: ${port}`));