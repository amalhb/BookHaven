import React from 'react';

const DisplayBooks = ({ books }) => {
  return (
    <div>
      <h2>All Books</h2>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book._id}>
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Published Year:</strong> {book.publishedYear}</p>
              <p><strong>Price:</strong> ${book.price}</p>
              {book.imageURL && <img src={book.imageURL} alt={book.title} />}
              <p>{book.description}</p>
              <div>
                <button>Update</button>
                <button>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayBooks;
