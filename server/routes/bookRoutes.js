const express = require("express");
const {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

// Book routes
router.get("/books", getAllBooks);
router.post("/books", createBook);
router.put("/books/:id", updateBook); // Update a book
router.delete("/books/:id", deleteBook); // Delete a book

module.exports = router;
