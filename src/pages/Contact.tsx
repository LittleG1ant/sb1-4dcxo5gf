import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import contactContent from '../content/contact.json';

const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{contactContent.title}</h1>
        <p className="text-xl text-gray-600">{contactContent.description}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="space-y-6">
          <div className="flex items-center">
            <MapPin className="h-6 w-6 text-blue-600" />
            <span className="ml-4 text-gray-700">{contactContent.address}</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-blue-600" />
            <span className="ml-4 text-gray-700">{contactContent.phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-6 w-6 text-blue-600" />
            <span className="ml-4 text-gray-700">{contactContent.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;