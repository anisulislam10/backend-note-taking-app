// backend/routes/noteRoutes.js
const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Define routes
router.get('/', noteController.getNotes);
router.post('/', noteController.createNote);
router.delete('/:id', noteController.deleteNote);

module.exports = router;
