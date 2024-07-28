import React from 'react';
import '../styles/Navbar';

const Navbar = ({workflowName}) => {
    return (
        <div className="navbar">
            <h1>{workflowName}</h1>
        </div>
    );
}

export default Navbar;
