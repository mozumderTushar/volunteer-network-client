import React from 'react';
import fakeData from '../../fakeData/volunteer'

const Admin = () => {
    const handleAddEvents = () => {
        fetch('http://localhost:5000/addEvents',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div>
            <button onClick={handleAddEvents}>Add Events</button>
        </div>
    );
};

export default Admin;