import React from 'react';
import Button from './Button';
import './Style.css'; // Import your CSS file

function Parameters() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="gradient-background">
      <div className="custom-text">
        Input Parameters:
      </div>
      <div className="section-text">
        Input Parameters
      </div>
      <div className="small-rectangles">
        <div className="small-rectangle left">
          <div className="input-container">
          <input 
                type="text"
                placeholder='Username'
                className='text-field-smaller'
            ></input>
            <input 
                type="text"
                placeholder='Username'
                className='text-field-smaller'
            ></input>
            <input 
                type="text"
                placeholder='Username'
                className='text-field-smaller'
            ></input>
            
             </div>
        </div>
        <div className="small-rectangle right">
          <div className="input-container">
          <input 
                type="text"
                placeholder='Username'
                className='text-field-smaller'
            ></input>
            <input 
                type="text"
                placeholder='Username'
                className='text-field-smaller'
            ></input>
            <input 
                type="text"
                placeholder='Username'
                className='text-field-smaller'
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parameters; 