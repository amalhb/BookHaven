import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = ({ addBook }) => {
  const [formData, setFormData] = useState({
    title: '',
    imageURL: '',
    description: '',
    author: '',
    genre: '',
    pdfLink: '',
    publishedYear: '',
    price: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    addBook(formData);  // Call the addBook function to add the new book
    navigate('/');  // Redirect to the dashboard or wherever you want after adding the book
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <div>
        {/* Form fields */}
        <div>
          <label>Title</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
          />
        </div>

        {/* Other form fields */}
        <div>
          <label>Author</label>
          <input 
            type="text" 
            name="author" 
            value={formData.author} 
            onChange={handleChange} 
          />
        </div>

        <div>
          <label>Genre</label>
          <input 
            type="text" 
            name="genre" 
            value={formData.genre} 
            onChange={handleChange} 
          />
        </div>

        <div>
          <label>Published Year</label>
          <input 
            type="number" 
            name="publishedYear" 
            value={formData.publishedYear} 
            onChange={handleChange} 
          />
        </div>

        <div>
          <label>Price</label>
          <input 
            type="number" 
            name="price" 
            value={formData.price} 
            onChange={handleChange} 
          />
        </div>

        <button type="button" onClick={handleSubmit}>
          Add Book
        </button>
      </div>
    </div>
  );
};

export default Create;
