import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import ContactMe from '../components/ContactMe';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <ContactMe />
      
      {/* Styled h1 section */}
      <div className='bg-slate-400 text-black py-10 flex justify-center items-center'>
        <h6 className='text-1xl font-extrabold underline  '>
          Created by Sadiq Khan
        </h6>
      </div>
    </div>
  );
};

export default Home;

