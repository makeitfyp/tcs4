import React from 'react'
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();

    return (
        <div>
 <h1 onClick={() => navigate("/")}>Header Here</h1>
 <button onClick={() => navigate("/Button")}> View Form</button>

        </div>
    )
}

export default Header
