const mongoose = require('mongoose');

const dbName = "Jokes";

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log(`Established a connection to ${dbName}`); })
    .catch((err) => console.log(`mongoose connection to ${dbName} failed:`, err));