import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DisplayBooks = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const deleteBook = async (id) => {
    console.log("Attempting to delete book with ID:", id); // Log the ID being deleted
    try {
      const response = await axios.delete(`http://localhost:5000/book/books/${id}`);
      if (response.status === 200) {
        setBooks((prevBooks) => prevBooks.filter(book => book._id !== id)); // Update state to remove deleted book
        console.log("Book deleted successfully"); // Log success
      } else {
        console.error("Failed to delete book:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  // Fetch books from the server when the component mounts
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/book/books');
        setBooks(response.data); // Assuming the response data is an array of books
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Books</h2>
      {books.length === 0 ? (
        <p className="text-gray-500">No books available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book._id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-700 mb-1"><strong>Author:</strong> {book.author}</p>
              <p className="text-gray-700 mb-1"><strong>Genre:</strong> {book.genre}</p>
              <p className="text-gray-700 mb-1"><strong>Published Year:</strong> {book.publishedYear}</p>
              <p className="text-gray-700 mb-1"><strong>Price:</strong> ${book.price}</p>
              {book.imageURL && (
                <img 
                  src={book.imageURL} 
                  alt={book.title} 
                  className="w-full h-48 object-cover rounded-md mb-2" // Set fixed height and maintain aspect ratio
                />
              )}
              <p className="text-gray-600 mb-2">{book.description}</p>
              <div className="flex justify-between mt-auto">
                <button 
                  onClick={() => navigate(`/update/${book._id}`)} 
                  className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Update
                </button>
                <button 
                  onClick={() => deleteBook(book._id)} 
                  className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayBooks;
