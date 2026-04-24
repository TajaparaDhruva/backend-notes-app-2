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
    getNotesByCategoryQuery,
} = require('../controllers/note.controller');

router.post('/', createNote);
router.post('/bulk', createMultipleNotes);

// FILTER ROUTES (most specific first)
router.get('/filter/pinned', getPinnedNotes);
router.get('/filter/category', getNotesByCategoryQuery);
router.get('/filter', getFilteredNotes);

// CATEGORY & STATUS
router.get('/category/:category', getNotesByCategory);
router.get('/status/:isPinned', getNotesByStatus);

// SUMMARY
router.get('/:id/summary', getNoteSummary);

// GENERAL
router.get('/', getAllNotes);

// ID-based routes LAST
router.get('/:id', getAllNote);
router.put('/:id', replaceNote);
router.patch('/:id', updateNote);
router.delete('/bulk', deleteBulkNotes);
router.delete('/:id', deleteNote);

module.exports = router;