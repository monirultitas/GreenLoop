import React from 'react';
import { Link } from 'react-router-dom';
import { RecycleIcon } from '../components/icons';

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[60vh] md:h-[80vh] text-white" style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=834')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Join the GreenLoop:
            <span className="block text-lg md:text-3xl font-semibold mt-1">Your Plastic, Our Purpose.</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl">
            Empowering Bangladesh's youth to transform plastic waste into a sustainable future, one school at a time.
          </p>
          <Link
            to="/get-involved"
            className="bg-green-primary hover:bg-green-dark text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Join the Loop
          </Link>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-dark">The Challenge We Face</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Bangladesh faces a growing plastic crisis, polluting our rivers, land, and cities. This isn't just an environmental issue; it impacts our health and future.
          </p>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-16 md:py-24 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark">Our Solution: The GreenLoop Model</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              GreenLoop is a community-based, student-led initiative. We empower students to collect plastic, which we then transform into useful items right on their campus using mobile recycling technology.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <RecycleIcon className="h-16 w-16 text-green-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Educate & Engage</h3>
              <p className="text-gray-600">We partner with schools to deliver workshops and awareness campaigns, inspiring students to become environmental champions.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <h3 className="text-xl font-bold mb-2">Collect & Process</h3>
              <p className="text-gray-600">Students collect plastics from their homes and communities, which are then processed by our innovative mobile recycling plants.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M5 3a2 2 0 00-2 2v1.172a2 2 0 00.586 1.414l2.828 2.828a2 2 0 002.828 0l2.828-2.828A2 2 0 0013.828 6.172V5a2 2 0 00-2-2H5zM6 17a2 2 0 012-2h8a2 2 0 012 2v1.172a2 2 0 01-.586 1.414l-2.828 2.828a2 2 0 01-2.828 0l-2.828-2.828A2 2 0 016.172 18.172V17z" /></svg>
              <h3 className="text-xl font-bold mb-2">Innovate & Upcycle</h3>
              <p className="text-gray-600">We transform collected plastic into useful, everyday products like school supplies and furniture, creating a tangible impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-primary text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8">
            Whether you're a student, a school, or a supporter, you have a role to play in the green revolution.
          </p>
          <Link
            to="/how-it-works"
            className="bg-white text-green-primary font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Learn How to Participate
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;