const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            minlength: [10, "First name must be at least (PATH) characters long"]
        },
        punchline: {
            type: String,
            minlength: [3, "First name must be at least (PATH) characters long"]
        }
    },
    { timestamps: true }
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;