const express = require("express");
const { getAllBooks, createBook ,deleteBook } = require("../controllers/bookController");

const router = express.Router();

router.get("/books", getAllBooks);
router.post("/books", createBook);
router.delete("/books", deleteBook);

module.exports = router;
