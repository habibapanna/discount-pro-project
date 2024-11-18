import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="bg-pink-300 p-6 shadow-md rounded-lg">
        <p className="text-lg mb-4">
          Hello! I am a 3rd-year Mathematics honors student with a passion for web development. I have experience building interactive and dynamic web applications using technologies such as React, JavaScript, and Firebase.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Skills</h2>
        <ul className="list-disc pl-5">
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>HTML & CSS</li>
          <li>Firebase Authentication & Firestore</li>
          <li>Web Design (using tools like Figma)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Projects</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Discount PRO</strong> - A coupon collection app that allows users to find discount coupons for popular e-commerce shops in Bangladesh. Built with React, Firebase for authentication, and dynamic component design.
          </li>
          <li>
            <strong>Project Name 2</strong> - A brief description of another project showcasing different skills or technologies.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
        <p>
          Feel free to reach out for collaboration or any queries at <strong>habiba@gmail.com</strong>.
        </p>
      </div>
    </div>
    );
};

export default About;