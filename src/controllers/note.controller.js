const Notes = require("../models/note.module");
const mongoose = require("mongoose");

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

/* ================= CREATE ================= */
const createNote = async (req, res) => {
  try {
    const { title, content, category, isPinned } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
        data: null,
      });
    }

    const note = await Notes.create({ title, content, category, isPinned });

    res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: note,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

const createMultipleNotes = async (req, res) => {
  try {
    const { notes } = req.body;

    if (!notes || !Array.isArray(notes) || notes.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Notes array is required and cannot be empty",
        data: null,
      });
    }

    const createdNotes = await Notes.insertMany(notes);

    res.status(201).json({
      success: true,
      message: `${createdNotes.length} notes created successfully`,
      data: createdNotes,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

const getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.find();

    res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      count: notes.length, 
      data: notes,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

const getAllNote = async (req, res) => {
  try {
    const notes = await Notes.find();

    res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      count: notes.length,   // 👈 important addition
      data: notes,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

const replaceNote = async (req, res) => {
  try {
    const { id } = req.params;
    let { title, content, category, isPinned } = req.body;

    // 1. Validate ID
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID",
        data: null,
      });
    }

    // 2. Enforce FULL replacement (required fields must be present)
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
        data: null,
      });
    }

    // 3. Apply defaults if not provided
    category = category || "personal";
    isPinned = isPinned ?? false;

    // 4. Replace document completely
    const updated = await Notes.findByIdAndUpdate(
      id,
      { title, content, category, isPinned },
      {
        new: true,
        overwrite: true,
        runValidators: true,
      }
    );

    // 5. Not found
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
        data: null,
      });
    }

    // 6. Success
    res.status(200).json({
      success: true,
      message: "Note replaced successfully",
      data: updated,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

module.exports = {
  createNote,
  createMultipleNotes,
  getAllNotes,
  getAllNote,
  replaceNote,
};