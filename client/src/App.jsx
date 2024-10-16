import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserInterface from './assets/sidebar/userinterface'; // Make sure to import your components correctly
import Create from './Create';
import DisplayBooks from './DisplayBooks';
 import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);


  const addBook = async (bookData) => {
    try {
      const response = await axios.post("http://localhost:3000/api/books", bookData);
  
      if (response.status === 201) {
        const newBook = response.data;
        setBooks((prevBooks) => [newBook, ...prevBooks]); // Update the books state
      } else {
        console.error("Failed to add book:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };
  //delete a book 
  const deleteBook = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/books/${id}`); // Send DELETE request
      
      if (response.status === 200) {
        setBooks((prevBooks) => prevBooks.filter(book => book._id !== id)); // Update the state to remove the deleted book
      } else {
        console.error("Failed to delete book:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  

  return (
    <Router>
      <UserInterface />
      <Routes>
      <Route path="/" element={<DisplayBooks books={books} deleteBook={deleteBook} />} /> /** pass props to the display book books to display the book and delete book  */
      <Route path="/add-book" element={<Create addBook={addBook} />} />
      </Routes>
      <UserInterface/>
    </Router>
  );
};

export default App;
