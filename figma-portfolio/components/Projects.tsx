// // /components/Projects.tsx
// const Projects = () => {
//   return (
//     <section id="projects" className="p-8 bg-gray-100 text-center">
//       <h2 className="text-3xl font-bold mb-4">Projects</h2>
      
//       {/* GIAIC Student Card */}
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">GIAIC Student Card</h3>
//         <p className="text-sm">
//           A web-based student card application that allows users to view and manage student profiles. This project demonstrates skills in UI design and data handling with React and TailwindCSS.
//         </p>
//       </div>

//       {/* Countdown Timer */}
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Countdown Timer</h3>
//         <p className="text-sm">
//           A simple yet functional countdown timer built using React and NextJs. Users can set a target time, and the app counts down until the specified event, making it ideal for events and deadlines.
//         </p>
//       </div>

//       {/* Weather Widget */}
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Weather Widget</h3>
//         <p className="text-sm">
//           An interactive weather widget that provides real-time weather data. This project utilizes APIs to fetch data and displays it in an easy-to-read format, showcasing skills in API integration and data visualization.
//         </p>
//       </div>

//       {/* Birthday Wish App */}
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Birthday Wish App</h3>
//         <p className="text-sm">
//           A fun application that allows users to create and send birthday wishes. Users can customize messages and designs, making it a perfect tool for spreading joy on someone’s special day.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Projects;

// /components/Projects.tsx
import React from "react";
import Link from "next/link";
const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-gradient-to-r from-black to-gray-300 text-center">
      <h2 className="text-4xl font-extrabold mb-6 text-black">Projects</h2>

      <div className="mb-6 shadow-lg p-6 rounded-lg bg-white hover:bg-blue-50 transition">
        <h3 className="text-2xl font-semibold text-blue-600">GIAIC Student Card</h3>
        <p className="text-gray-700">A web-based student card application that allows users to view and manage student profiles. This project demonstrates skills in UI design and data handling with React and TailwindCSS.</p>
      </div>

      <div className="mb-6 shadow-lg p-6 rounded-lg bg-white hover:bg-blue-50 transition">
        <h3 className="text-2xl font-semibold text-blue-600">Countdown Timer</h3>
        <p className="text-gray-700">A simple yet functional countdown timer built using React and NextJs. Users can set a target time, and the app counts down until the specified event, making it ideal for events and deadlines.</p>
      </div>

      <div className="mb-6 shadow-lg p-6 rounded-lg bg-white hover:bg-blue-50 transition">
        <h3 className="text-2xl font-semibold text-blue-600">Weather Widget</h3>
        <p className="text-gray-700">An interactive weather widget that provides real-time weather data. This project utilizes APIs to fetch data and displays it in an easy-to-read format, showcasing skills in API integration and data visualization.</p>
      </div>

      <div className="shadow-lg p-6 rounded-lg bg-white hover:bg-blue-50 transition">
        <h3 className="text-2xl font-semibold text-blue-600">Birthday Wish App</h3>
        <p className="text-gray-700">A fun application that allows users to create and send birthday wishes. Users can customize messages and designs, making it a perfect tool for spreading joy on someone’s special day.</p>
      </div>
    </section>
  );
};

export default Projects;
