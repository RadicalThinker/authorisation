import React from 'react';
import { motion } from 'framer-motion';
import { useFirebase } from '../context/Firebasecontext';
import GeekRoom from '../assests/GeekRoomLogo.3576ad97.svg';
const Home = () => {
  const firebase = useFirebase();

  const handleLogout = () => {
    firebase.SignoutUser();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto  py-4 flex justify-between items-center">
          <img src={GeekRoom} alt="geekroom" className='' />
          <nav className='flex'>
            <ul className="flex space-x-4 ">
              <li><span  className="hover:text-gray-300">Home</span></li>
              <li><span  className="hover:text-gray-300">Categories</span></li>
              <li><span  className="hover:text-gray-300">About</span></li>
              <li><button onClick={handleLogout} className=' bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 '>Logout</button></li>
            </ul>

          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <div className="bg-zinc-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to the Geek Room
            </motion.h1>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Dive into a world of coding, tech, hackathons and more!
            </motion.p>
            <div className="space-x-4">
              <span  className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">Get Started</span>
              <span  className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black">Learn More</span>
            </div>
          </div>
        </div>

        <div className="py-20 bg-zinc-600">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Our Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['Technology', 'Codding', 'Hackathons', 'Goodies'].map((category, index) => (
                <motion.div
                  key={category}
                  className="bg-zinc-200 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <p className="text-gray-600 mb-4">Explore the latest in {category.toLowerCase()}</p>
                  <span  className="text-blue-600 hover:underline">Learn more →</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© made by yash vardhan rawat</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;