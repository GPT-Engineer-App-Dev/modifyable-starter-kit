import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 mb-4">
          This is a simple about page for your application. You can add more content and components here as needed.
        </p>
        <p className="text-gray-600">
          Feel free to modify this page and add more sections, images, or any other content that describes your application or organization.
        </p>
      </div>
    </Layout>
  );
};

export default About;