import React from 'react';

interface HeadlineProps {
  text: string;
}

const Headline: React.FC<HeadlineProps> = ({ text }) => {
  return (
    <h1 className="text-4xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      {text}
    </h1>
  );
};

export default Headline;
