import React from 'react';
import { Link } from 'react-router-dom';
import homeContent from '../content/home.json';

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="relative">
        <img
          src={homeContent.heroImage}
          alt="Hero"
          className="w-full h-[400px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
          <div className="text-center text-white p-8">
            <h1 className="text-4xl font-bold mb-4">{homeContent.title}</h1>
            <p className="text-xl mb-8">{homeContent.description}</p>
            <Link
              to={homeContent.ctaLink}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {homeContent.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;