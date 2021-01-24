import React from 'react';

const Container: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col bg-gray-800 h-screen py-60 px-96">
      {children}
    </div>
  )
}

export default Container;