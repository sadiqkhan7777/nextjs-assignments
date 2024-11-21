// // /components/Education.tsx
// const Education = () => {
//   return (
//     <section id="education" className="p-8 bg-gray-100 text-center">
//       <h2 className="text-3xl font-bold mb-4">Education</h2>
      
//       {/* Intermediate */}
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Intermediate in Pre-Engineering</h3>
//         <p className="text-sm">Govt Degree Science College for Boys, 2019 - 2021</p>
//         <p className="text-sm">Focused on mathematics and physics, with active participation in science fairs.</p>
//       </div>

//       {/* Matric */}
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Matric in Science Group</h3>
//         <p className="text-sm">Safia Memorial Children's Academy Secondary, 2015 - 2017</p>
//         <p className="text-sm">Achieved high marks in mathematics and computer science. Member of the coding club and participated in regional hackathons.</p>
//       </div>

//       {/* Additional Certifications */}
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Additional Certifications</h3>
//         <p className="text-sm">Various online platforms, 2020 - Present</p>
//         <ul className="list-disc list-inside">
//           <li className="text-sm">IT for Office Applications</li>
//           <li className="text-sm">Amazon FBA Master</li>
//           <li className="text-sm">Affiliate Marketing</li>
//           <li className="text-sm">Generative AI Course (currently enrolled)</li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Education;
import React from "react";

const Education = () => {
  return (
    <section id="education" className="p-4 sm:p-8 bg-gradient-to-r from-black to-gray-300 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-black">Education</h2>

      {/* Education Entries */}
      <div className="mb-4 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl sm:text-3xl text-black">Intermediate in Pre-Engineering</h3>
        <p className="text-black">Govt Degree Science College for Boys, 2019 - 2021</p>
        <p className="text-black">Focused on mathematics and physics, with active participation in science fairs.</p>
      </div>

      <div className="mb-4 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl sm:text-3xl font-semibold text-black">Matric in Science Group</h3>
        <p className="text-black shadow-xl">Safia Memorial Children's Academy Secondary, 2015 - 2017</p>
        <p className="text-black">Achieved high marks in mathematics and computer science. Member of the coding club and participated in regional hackathons.</p>
      </div>

      {/* Certifications */}
      <div className="mb-4 p-4 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-90">
        <h3 className="text-2xl sm:text-3xl font-semibold text-black">Additional Certifications</h3>
        <ul className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 text-black mt-2">
          <li className="mb-2 sm:mb-0">😂 IT for Office Applications</li>
          <li className="mb-2 sm:mb-0">✌ Amazon FBA Master</li>
          <li className="mb-2 sm:mb-0">✌ Affiliate Marketing</li>
          <li className="mb-2 sm:mb-0">😎 Generative AI Course (currently enrolled)</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;

