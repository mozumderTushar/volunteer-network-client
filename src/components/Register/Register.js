import React from 'react';
import { useParams } from 'react-router-dom';

const Register = () => {
    const {registerId} = useParams()
    return (
        <div>
            <h3>This is Register {registerId}</h3>
        </div>
    );
};

export default Register;