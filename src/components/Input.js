import React, { Component } from 'react';


const Input = ({name, text, onChange, placeholder, value}) => (
  <input
    name={name}
    type={text}
    onChange={onChange}
    placeholder={placeholder}
    value={value}
  />
);

  export default Input;