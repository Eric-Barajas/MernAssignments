const express = require('express');

const {
    handleCreateAuthor,
    getAllAuthors,
    getAuthorById,
    deleteAuthorById,
    updateAuthorById
} = require('../controllers/author.controller');


const router = express.Router()

router.post('/', handleCreateAuthor);
router.get('/', getAllAuthors);
router.get('/:id', getAuthorById);
router.delete('/:id', deleteAuthorById);
router.put('/:id', updateAuthorById);

module.exports = { authorRouter: router }