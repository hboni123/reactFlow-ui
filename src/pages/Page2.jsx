import React, { useState } from 'react';
import '../styles/Page2.css';
import Navbar from '../components/Navbar';

const Page2 = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        try {
            const parsedJson = JSON.parse(jsonInput);
            console.log('Valid JSON:', parsedJson);
            setMessage('Valid JSON submitted!');
        } catch (error) {
            console.error('Invalid JSON:', error);
            setMessage('Invalid JSON. Please correct it and try again.');
        }
    };

    return (
        <div>
            <Navbar workflowName = 'workflowName'/>
        <div className="container">
            
            <h2>Input JSON Data</h2>
            <textarea 
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder="Enter JSON here..."
                className="json-input"
            />
            <button 
                onClick={handleSubmit}
                className="submit-button"
            >
                Submit
            </button>
            {message && <p className="message">{message}</p>}
        </div>
        </div>
    );
};

export default Page2;
