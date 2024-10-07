import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center h-screen text-white flex items-center h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Your Design, Our Production
      </h1>
      <p className="text-lg md:text-2xl text-white-600 mb-8">
        Start your custom product store today with Printify.
      </p>
      <button className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition duration-300">
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;




// import React from 'react';

// const HeroSection = () => {
//   return (
//     <section className="bg-hero-pattern bg-cover bg-center h-screen text-white flex items-center">
//       <div className="container mx-auto text-center">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">Start Your Print-On-Demand Journey</h1>
//         <p className="text-lg md:text-2xl mb-6">Create, sell, and grow your business with ease.</p>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
//           Get Started
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


