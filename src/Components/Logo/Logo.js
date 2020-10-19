import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './logo.png';

const Logo = () => {
    return (
        <div className="ma4 mto">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner"> 
            <div className="Tilt-inner pa3">
                <img style={{paddingTop: '12px', marginTop : '16px'}} alt='logo' src={logo}/>
                </div>
            </div>
            </Tilt>
        </div>

          
     );

}

export default Logo;