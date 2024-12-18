import React from 'react';
import servicesContent from '../content/services.json';

const Services: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{servicesContent.title}</h1>
        <p className="text-xl text-gray-600">{servicesContent.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {servicesContent.services.map((service) => (
          <div key={service.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={service.imageUrl}
              alt={service.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;