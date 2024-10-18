import React from "react";



const About =()=>{
  return (
    <div className="p-6 max-w-xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-lg flex items-center gap-x-4">
      <div className="text-center w-full"> 
        <h3 className="text-2xl font-bold mb-4 text-blue-600">ABOUT STORY HAVEN</h3> {/* Changed color to blue */}
        <p className="text-gray-800"> {/* Darkened text for better contrast */}
          Welcome to Story Haven, your destination for captivating reads and literary treasures.
          We curate a collection of books for every kind of reader, ensuring that you find stories 
          that inspire, inform, and entertain. Dive into our selection, and let every page take you 
          on an unforgettable journey.
        </p>
        <p className="mt-4 font-semibold text-blue-500"> {/* Changed color to blue */}
          <strong>Happy reading!</strong> 📖
        </p>
      </div>
    </div>
  );
  

}



export default About