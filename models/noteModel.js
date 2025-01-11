// backend/models/noteModel.js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

const Note = mongoose.model('Note', noteSchema); // Make sure this line is correct

module.exports = Note;
