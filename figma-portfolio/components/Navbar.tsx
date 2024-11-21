import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 p-4 text-white flex justify-between items-center shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            className="h-10 w-10 object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link href="#intro" className="hover:underline">Home</Link>
        <Link href="#education" className="hover:underline">Education</Link>
        <Link href="#experience" className="hover:underline">Experience</Link>
        <Link href="#projects" className="hover:underline">Projects</Link>
        <Link href="#skills" className="hover:underline">Skills</Link>
        <Link href="#contact" className="hover:underline">Contact Me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
