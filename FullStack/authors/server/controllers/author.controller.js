const { Author } = require('../models/author.model');

const handleCreateAuthor = async (req, res) => {
    try {
        const newAuthor = await Author.create(req.body);
        return res.json(newAuthor);
    } catch (err) {
        return res.status(400).json(err);
    }
}

const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        return res.json(authors);
    } catch (err) {
        return res.status(400).json(err);
    }
}

const getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id)
        return res.json(author);
    } catch (err) {
        return res.status(400).json(err);
    }
}

const deleteAuthorById = async (req, res) => {
    try {
        const deletedAuthor = await Author.findByIdAndDelete(req.params.id)
        return res.json(deletedAuthor);
    } catch (err) {
        return res.status(400).json(error);
    }
}

const updateAuthorById = async (req, res) => {
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, {
            // re-run our validaitons
            runValidators: true,
        })
        return res.json(updatedAuthor);
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreateAuthor,
    getAllAuthors,
    getAuthorById,
    deleteAuthorById,
    updateAuthorById
}