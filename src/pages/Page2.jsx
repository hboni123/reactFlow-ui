import React, { useState, useEffect, useRef } from 'react';
import '../styles/Page2.css';

const Page2 = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [message, setMessage] = useState('');
    const submitButtonRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        try {
            // Parse the input to ensure it is valid JSON
            const parsedInput = JSON.parse(jsonInput);
            // Send the parsed input as JSON
            const response = await fetch('http://localhost:8080/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(parsedInput)
            });

            if (response.ok) {
                console.log('Data saved successfully');
                setMessage('Data saved successfully');
            } else {
                const errorText = await response.text();
                console.error('Failed to save data', errorText);
                setMessage(`Failed to save data: ${errorText}`);
            }
        } catch (error) {
            console.error('Invalid JSON:', error);
            setMessage('Invalid JSON. Please correct it and try again.');
        }
    };

    useEffect(() => {
        const button = submitButtonRef.current;
        button.addEventListener('click', handleSubmit);

        return () => {
            button.removeEventListener('click', handleSubmit);
        };
    }, []);

    return (
        <div className="container">
            <h2>Input Data</h2>
            <textarea 
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder="Enter JSON data here..."
                className="json-input"
            />
            <button 
                ref={submitButtonRef}
                className="submit-button"
            >
                Submit
            </button>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default Page2;
