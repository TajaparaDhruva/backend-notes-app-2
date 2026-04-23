const express = require('express');
const router = express.Router();

const{
    createNote,
} = require('../controllers/note.controller');

router.post('/',createNote);

module.exports = router;