// // /components/Experience.tsx
// const Experience = () => {
//   return (
//     <section id="experience" className="p-8 bg-gray-200 text-center">
//       <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
      
//       {/* Data Entry Operator */}
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Data Entry Operator</h3>
//         <p className="text-sm">Edge Car Accessories | Duration: 1 Year</p>
//         <p className="text-sm">
//           Performed accurate data entry for inventory and sales records, ensuring the company’s data integrity and contributing to overall operational efficiency.
//         </p>
//       </div>

//       {/* Security Guard */}
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Security Guard</h3>
//         <p className="text-sm">BRT Green Line | Duration: 3 Months</p>
//         <p className="text-sm">
//           Monitored premises to ensure safety and security, assisted passengers, and collaborated with team members to maintain a secure environment.
//         </p>
//       </div>

//       {/* Dropshipping Intern */}
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Dropshipping Intern</h3>
//         <p className="text-sm">SYNERGY TIME | Duration: 3 Months</p>
//         <p className="text-sm">
//           Gained practical experience in dropshipping by managing product listings, processing orders, and coordinating with suppliers to ensure timely delivery and customer satisfaction.
//         </p>
//       </div>

//       {/* Salesman */}
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Salesman</h3>
//         <p className="text-sm">AA Wholesale Stationery Store | Duration: 2 Years</p>
//         <p className="text-sm">
//           Responsible for customer service and sales at a busy wholesale stationery store. Developed skills in customer relations, inventory management, and upselling techniques.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="p-8 bg-gradient-to-r from-gray-300 to-black text-center shadow-lg">
      <h2 className="text-4xl font-extrabold mb-6">Work Experience</h2>

      <div className="mb-4 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold">Data Entry Operator</h3>
        <p>Edge Car Accessories | Duration: 1 Year</p>
        <p className="text-gray-500">Performed accurate data entry for inventory and sales records, ensuring the company’s data integrity and contributing to overall operational efficiency.</p>
      </div>

      <div className="mb-4 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold">Security Guard</h3>
        <p>BRT Green Line | Duration: 3 Months</p>
        <p className="text-gray-500">Monitored premises to ensure safety and security, assisted passengers, and collaborated with team members to maintain a secure environment.</p>
      </div>

      <div className="mb-4 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold">Dropshipping Intern</h3>
        <p>SYNERGY TIME | Duration: 3 Months</p>
        <p className="text-gray-500">Gained practical experience in dropshipping by managing product listings, processing orders, and coordinating with suppliers to ensure timely delivery and customer satisfaction.</p>
      </div>

      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold">Salesman</h3>
        <p>AA Wholesale Stationery Store | Duration: 2 Years</p>
        <p className="text-gray-500">Responsible for customer service and sales at a busy wholesale stationery store. Developed skills in customer relations, inventory management, and upselling techniques.</p>
      </div>
    </section>
  );
};

export default Experience;
