import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloudinary } from "@cloudinary/url-gen"; 
import axios from 'axios'; 

const Create = () => {
const [allowAdd, setAllowAdd] = useState(false)



  const addBook = async (bookData) => {
    try {
      console.log('Sending book data:', bookData); // Log the data being sent

      const response = await axios.post("http://localhost:5000/book/books", bookData);
      console.log(response.data);
      
 
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };


  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: 'dkdmxqun2' 
    }
  });

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

  // Handle image upload 
  const handleimage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData(); 
    formData.append('file', file);
    formData.append('upload_preset', 'amalupload'); 

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dkdmxqun2/upload`, 
        formData
      );

      const data = response.data;
      console.log('Cloudinary response:', data);
      setFormData((prevData) => ({
        ...prevData,
        imageURL: data.secure_url // Set the imageURL in formData
      }));
      setAllowAdd(true)

    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmit = () => {
    console.log(formData);
    addBook(formData); // Call the addBook function to add the new book
    navigate('/AllBook'); // Redirect to AllBook to show all books
  };

  return (
    <div className="flex-grow p-1 h-screen flex justify-center items-start">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-xs"> {/* Changed background color */}
        <h2 className="text-lg font-bold mb-2 text-white text-center">Add a New Book</h2> {/* Changed text color */}
  
        <div className="space-y-3"> {/* Increased spacing between form elements */}
          <div>
            <label className="block text-xs font-medium text-gray-300">Title</label> {/* Changed label color */}
            <input 
              type="text" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 text-xs bg-gray-700 text-white border border-gray-600 rounded-md focus:ring focus:ring-amber-300 transition duration-200" 
            />
          </div>
  
          <div>
            <label className="block text-xs font-medium text-gray-300">Image URL</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleimage} 
              className="mt-1 block w-full text-xs border border-gray-600 rounded-md bg-gray-700 text-white" 
            />
            {formData.imageURL && (
              <div className="mt-1">
                <img src={formData.imageURL} alt="Uploaded Preview" className="w-24 h-auto" /> 
              </div>
            )}
          </div>
  
          <div>
            <label className="block text-xs font-medium text-gray-300">Description</label>
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 text-xs bg-gray-700 text-white border border-gray-600 rounded-md focus:ring focus:ring-amber-300 transition duration-200"
            />
          </div>
  
          <div>
            <label className="block text-xs font-medium text-gray-300">Author</label>
            <input 
              type="text" 
              name="author" 
              value={formData.author} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 text-xs bg-gray-700 text-white border border-gray-600 rounded-md focus:ring focus:ring-amber-300 transition duration-200"
            />
          </div>
  
          <div>
            <label className="block text-xs font-medium text-gray-300">Genre</label>
            <input 
              type="text" 
              name="genre" 
              value={formData.genre} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 text-xs bg-gray-700 text-white border border-gray-600 rounded-md focus:ring focus:ring-amber-300 transition duration-200"
            />
          </div>
  
          <div>
            <label className="block text-xs font-medium text-gray-300">PDF Link</label>
            <input 
              type="text" 
              name="pdfLink" 
              value={formData.pdfLink} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 text-xs bg-gray-700 text-white border border-gray-600 rounded-md focus:ring focus:ring-amber-300 transition duration-200"
            />
          </div>
  
          <div>
            <label className="block text-xs font-medium text-gray-300">Published Year</label>
            <input 
              type="number" 
              name="publishedYear" 
              value={formData.publishedYear} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 text-xs bg-gray-700 text-white border border-gray-600 rounded-md focus:ring focus:ring-amber-300 transition duration-200"
            />
          </div>
  
          <div>
            <label className="block text-xs font-medium text-gray-300">Price</label>
            <input 
              type="number" 
              name="price" 
              value={formData.price} 
              onChange={handleChange} 
              className="mt-1 block w-full p-2 text-xs bg-gray-700 text-white border border-gray-600 rounded-md focus:ring focus:ring-amber-300 transition duration-200"
            />
          </div>
  
          <button 
  type="button" 
  onClick={handleSubmit} 
  className="w-full bg-blue-500 text-white text-sm font-semibold py-1 rounded-md hover:bg-blue-600 transition duration-300"
  disabled={!allowAdd}
>
  Add Book
</button>
        </div>
      </div>
    </div>
  );
  
  
};

export default Create;
