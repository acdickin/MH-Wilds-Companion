import React from 'react';

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-6 bg-slate-200 rounded-lg shadow-md ">{children}</div>
  );
};

export default Card;
