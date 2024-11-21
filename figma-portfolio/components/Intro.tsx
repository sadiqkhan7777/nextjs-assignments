// // // /components/Intro.tsx
// // import Image from "next/image";

// // const Intro = () => {
// //   return (
// //     <div
// //       id="intro"
// //       className="flex flex-col md:flex-row items-center p-8 bg-gradient-to-r from-blue-600 to-purple-500 text-white text-center md:text-left shadow-lg"
// //     >
      
// //       {/* Left Side: Text */}
// //       <div className="md:w-1/2 p-4">
// //         <h1 className="text-5xl  font-bold mb-2">Hello, I'm Sadiq Khan</h1>
// //         <p className="text-2xl font-light">
// //           I'm certified in IT for office applications, a certified in amazon FBA
// //           mastery, and also certified in affiliate marketing. I am currently
// //           enrolled in the Generative AI. A passionate developer and learner.
// //         </p>
// //       </div>

// //       {/* Right Side: Image */}
// //       <div className="md:w-1/2 p-4 flex justify-center">
// //         <Image
// //           src="/images/sadiq.png"
// //           alt="Sadiq Khan"
// //           width={300}
// //           height={300}
// //           className="rounded-full shadow-xl transition-transform transform hover:scale-105"
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// export default Intro;

import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-300 to-black p-4 sm:p-8"
    >
      {/* Portfolio Page Heading */}
      <h1
        className="text-3xl sm:text-4xl font-extrabold text-black mb-4 uppercase hover:underline 
                   p-2 sm:p-4 rounded-lg shadow-2xl text-center"
      >
       Figma Inspired Portfolio
      </h1>
      

      <div
        id="intro"
        className="flex flex-col md:flex-row items-center p-4 sm:p-8 bg-zinc-400 text-black text-center md:text-left shadow-lg rounded-lg"
      >
        {/* Left Side: Text */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Hello, I'm Sadiq Khan</h1>
          <p className="text-lg sm:text-xl md:textl font-light">
            I'm certified in IT for office applications, Amazon FBA mastery, and affiliate marketing. 
            Currently enrolled in Generative AI. A passionate developer and learner.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 p-4 flex justify-center">
          <Image
            src="/images/profile.jpg"
            alt="Sadiq Khan"
            width={300}
            height={300}
            className="rounded-full shadow-xl transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
