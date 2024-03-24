import React from 'react';
import Button from './Button'
import './Style.css'; // Import your CSS file


function HomePage() {
    const handleClick = () => {
        alert('Button clicked!');
      };

  return (
    <div className="gradient-background">
      <div className="bigRectangle">
        <div className='leftRectangle'>
            <div className='custom-text'>
            Protect
            The
            Farm
            </div>
        </div>
        <div className='rightRectangle'>
            <div className='custom-text'>
                Welcome!
            </div>
            <input 
                type="text"
                placeholder='Username'
                className='text-field'
            ></input>
            <input 
                type="password"
                placeholder='Password'
                className='text-field'
            ></input>
            <Button 
                className='button'
                onClick={handleClick}
            >Login
            </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
