import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Bookupdated = ({ updateBook }) => {
    const { id } = useParams(); // Get the book ID from the URL
    const navigate = useNavigate(); 
    // State to hold the details of the book fetched 
    const [detbook, setdetbook] = useState({
        price: "",
        description: "",
    });

    useEffect(() => {
        const fetchbookdata = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/book/books/${id}`);
                const { description, price } = response.data;
                setdetbook({ description, price });
            } catch (error) {
                console.log('Error fetching book details:', error);
            }
        };
        fetchbookdata();
    }, [id]);

    // Handle the update
    const handleUpdate = async () => {
        await updateBook(id, detbook); // Use the passed updateBook function
        navigate('/AllBook'); // Navigate after updating
      };
    
    return (
        <div>
            <h2>Update Book</h2>
            <div>
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        value={detbook.description}
                        onChange={(e) => setdetbook((prevDetails) => ({
                            ...prevDetails,
                            description: e.target.value,
                        }))}
                    />
                </div>

                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        value={detbook.price}
                        onChange={(e) => setdetbook((prevDetails) => ({
                            ...prevDetails,
                            price: e.target.value,
                        }))}
                    />
                </div>

                <button type="button" onClick={handleUpdate}>
                Update Book
                </button>
            </div>
        </div>
    );
};

export default Bookupdated;
