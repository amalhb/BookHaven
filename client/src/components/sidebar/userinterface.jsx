import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaBook, FaPlusCircle, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa'; // Importing icons
import About from "./about";
import Create from "./createbook";
import DisplayBooks from "./displaybook";
import Bookupdated from "./update";
import axios from "axios";

const UserInterface = () =>{ 
  const [showWelcome, setShowWelcome] = useState(true); 
  const [books, setBooks] = useState([]);

  const handleNavigation = () => {
    setShowWelcome(false); 
  };

 

 

  const updateBook = async (id, bookData) => {
    try {
      const response = await axios.put(`http://localhost:5000/book/books/${id}`, bookData);
      if (response.status === 200) {
        const updatedBook = response.data;
        setBooks((prevBooks) => 
          prevBooks.map((book) => (book._id === id ? updatedBook : book))
        );
      } else {
        console.error("Failed to update book:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-blue-600 text-gray-200 flex flex-col shadow-lg">
       

        <nav className="mt-5 flex-grow">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/add-book" 
                className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-600 hover:shadow-md transition duration-300 rounded-lg"
                onClick={handleNavigation}
              >
                <FaPlusCircle className="mr-2" /> {/* Icon for Add Book */}
                Add Book
              </Link>
            </li>
            <li>
              <Link 
                to="/AllBook" 
                className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-600 hover:shadow-md transition duration-300 rounded-lg"
                onClick={handleNavigation}
              >
                <FaBook className="mr-2" /> {/* Icon for All Books */}
                All Books
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-600 hover:shadow-md transition duration-300 rounded-lg"
                onClick={handleNavigation}
              >
                <FaInfoCircle className="mr-2" /> {/* Icon for About */}
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/sign-out" 
                className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-600 hover:shadow-md transition duration-300 rounded-lg"
                onClick={handleNavigation}
              >
                <FaSignOutAlt className="mr-2" /> {/* Icon for Sign Out */}
                Sign Out
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-grow bg-gray-50 p-4">
        {showWelcome && (
          <div className="p-4 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-bold">Welcome to Book Haven!</h2>
            <p className="mt-2 text-gray-700">Explore your favorite books.</p>
          </div>
        )}

<Routes>
          <Route path="/about" element={<About />} />
          <Route path="/add-book" element={<Create />} />
          <Route path="/AllBook" element={<DisplayBooks />} />
          <Route path="/update/:id" element={<Bookupdated updateBook={updateBook} />} />
        </Routes>
      </main>
    </div>
  );
};

export default UserInterface;