import React from 'react';
import aboutContent from '../content/about.json';

const About: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{aboutContent.title}</h1>
        <p className="text-xl text-gray-600">{aboutContent.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {aboutContent.team.map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
              <p className="mt-2 text-gray-600">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;