import React from 'react';

const Button = ({ type, className, id, onClick, children }) => {
  return (
    <ButtonComponent
      type={type ? type : 'button'}
      className={className ? `btn-component ${className}` : 'btn-component'}
      id={id}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
