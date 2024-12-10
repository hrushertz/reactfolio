import React from 'react';
import './Certificates.css'; // Importing the new CSS file

const Certificates = () => {
    return (
        <div>
            <h1>My Certificates and Badges</h1>
            <div className="certificates-container">
                {/* Add your certificate images here */}
                <img src="path/to/certificate1.png" alt="Certificate 1" />
                <img src="path/to/certificate2.png" alt="Certificate 2" />
                {/* More certificates can be added similarly */}
            </div>
        </div>
    );
};

export default Certificates;
