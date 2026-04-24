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
    deleteBulkNotes,
    getNotesByCategory,
    getNotesByStatus,
    getNoteSummary,
    getFilteredNotes,
    getPinnedNotes,
} = require('../controllers/note.controller');

router.post('/',createNote);
router.post('/bulk', createMultipleNotes);
router.get('/',getAllNotes);
router.get('/:id',getAllNote);
router.put('/:id',replaceNote);
router.patch('/:id',updateNote);
router.delete('/bulk',deleteBulkNotes);
router.delete('/:id',deleteNote);
router.get('/category/:category',getNotesByCategory);
router.get('/status/:isPinned',getNotesByStatus);
router.get('/:id/summary', getNoteSummary);
router.get('/filter',getFilteredNotes);
router.get('/filter/pinned', getPinnedNotes);

module.exports = router;