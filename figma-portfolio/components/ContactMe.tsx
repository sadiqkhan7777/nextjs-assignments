// // /components/ContactMe.tsx
// const ContactMe = () => {
//   return (
//     <section id="contact" className="p-8 bg-blue-500 text-white text-center">
//       <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
//       <p>Email: sadiq.khan@example.com</p>
//       <p>Phone: +123456789</p>
//     </section>
//   );
// };

// export default ContactMe;

// /components/ContactMe.tsx
import React from "react";
const ContactMe = () => {
  return (
    <section id="contact" className="p-8 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-extrabold mb-6">Contact Me </h2>
      <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Email Address"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block drop-shadow-xl text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea
            id="message"
            required
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Message and dont share your personal information here"
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
