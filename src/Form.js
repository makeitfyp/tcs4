import React from 'react'
import { useNavigate } from 'react-router-dom';

function Form() {
    const navigate = useNavigate();

    return (
        <div>
            <form >
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
        />
        </label>
        <input type="submit" />
    </form>
 

            <button   onClick={() => navigate("/")}>Back to Home</button>

        </div>
    )
}

export default Form
