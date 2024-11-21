// // /components/Skills.tsx
// const Skills = () => {
//   return (
//     <section id="skills" className="p-8 bg-gray-200 text-center">
//       <h2 className="text-3xl font-bold mb-4">Skills</h2>
      
//       {/* Amazon FBA Mastery */}
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Amazon FBA Mastery</h3>
//         <p className="text-sm">
//           Proficient in Amazon FBA with experience in product research, listing optimization, and inventory management. Able to leverage the Amazon platform for effective e-commerce solutions.
//         </p>
//       </div>

//       {/* IT and Office Applications */}
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">IT and Office Applications</h3>
//         <p className="text-sm">
//           Skilled in office productivity tools like Microsoft Office Suite, Google Workspace, and various IT applications. Knowledgeable in creating professional documents, managing spreadsheets, and conducting presentations.
//         </p>
//       </div>

//       {/* Affiliate Marketing */}
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Affiliate Marketing</h3>
//         <p className="text-sm">
//           Experienced in affiliate marketing strategies, with expertise in promoting products through content creation, SEO, and social media marketing. Familiar with various affiliate platforms to maximize earnings.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// /components/Skills.tsx
import react from "react";
const Skills = () => {
  return (
    <section id="skills" className="p-8 bg-gradient-to-r from-gray-300 to-black text-center">
      <h2 className="text-4xl font-bold mb-6 text-black">Skills</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Skill Item: Amazon FBA Mastery */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">Amazon FBA Mastery</h3>
          <p className="text-gray-600 text-sm">
            Proficient in Amazon FBA with experience in product research, listing optimization, and inventory management. Able to leverage the Amazon platform for effective e-commerce solutions.
          </p>
        </div>

        {/* Skill Item: IT and Office Applications */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">IT and Office Applications</h3>
          <p className="text-gray-600 text-sm">
            Skilled in office productivity tools like Microsoft Office Suite, Google Workspace, and various IT applications. Knowledgeable in creating professional documents,
             managing spreadsheets, and conducting presentations.
          </p>
        </div>

        {/* Skill Item: Affiliate Marketing */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl fontnpm run d-semibold text-blue-600 mb-2">Affiliate Marketing</h3>
          <p className="text-gray-600 text-sm">
            Experienced in affiliate marketing strategies, with expertise in promoting products through content creation, SEO, and social media marketing. Familiar with various
             affiliate platforms to maximize earnings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
