// backend/controllers/noteController.js
const Note = require('../models/noteModel');

// Get all notes
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find(); // Ensure you are calling this correctly
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new note
exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNote = new Note({
      title,
      content,
    });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    await Note.findByIdAndDelete(id);
    res.json({ message: 'Note deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
