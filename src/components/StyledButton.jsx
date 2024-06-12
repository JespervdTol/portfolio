import React from 'react';

const StyledButton = ({ className, onClick, text }) => {
  return (
    <button className={`styledButton fw-bold ${className}`} onClick={onClick}>{text}</button>
  );
};

export default StyledButton ;