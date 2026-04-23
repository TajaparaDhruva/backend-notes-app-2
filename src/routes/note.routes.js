const express = require('express');
const router = express.Router();

const{
    createNote,
    createMultipleNotes
} = require('../controllers/note.controller');

router.post('/',createNote);
router.post('/bulk', createMultipleNotes);

module.exports = router;