import React from "react";
import { Link } from "react-router-dom";

const UserInterface = () => {
  return (
    <div>
      {/* Header Section (Photo in the top-left) */}
      <header>
        <img 
          src="your-photo-url.jpg" 
          alt="Profile"
        />
      </header>

      {/* Sidebar / Dashboard */}
      <nav>
        <ul>
          <li><Link to="/add-book">Add Book</Link></li>
          <li><Link to="/">Display All Books</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/signout">Sign Out</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        <h1>Welcome to Book Haven!</h1>
        <p>
          Select an option from the dashboard to get started.
        </p>
      </main>
    </div>
  );
};

export default UserInterface;
