import React from 'react'
import { useNavigate } from 'react-router-dom';

function Button() {
    const navigate = useNavigate();

    return (
        <div>
 <h1   onClick={() => navigate("/Form")}>Click to View Form</h1>
        </div>
    )
}

export default Button
