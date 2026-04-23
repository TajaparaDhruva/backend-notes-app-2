const express = require('express');
const router = express.Router();

const{
    createNote,
    createMultipleNotes,
    getAllNotes,
    getAllNote,
    replaceNote,
    updateNote,
    deleteNote,
} = require('../controllers/note.controller');

router.post('/',createNote);
router.post('/bulk', createMultipleNotes);
router.get('/',getAllNotes);
router.get('/:id',getAllNote);
router.put('/:id',replaceNote);
router.patch('/:id',updateNote);
router.delete('/:id',deleteNote);

module.exports = router;