import { useState } from 'react'
import './App.css'
import React from 'react'
function App() {
    const [formData, setFormData] = useState({ fisrtName: "", lastName: "" })
    function handleChange(event) {
        setFormData(prevformData =>{
            return(
                ...prevFormData, 
                [event.target.name]: Event.target.value

            )

        })
    }

    return (

        <div>
            <form >
                First Name: <input type="text" name="fisrtName" className="firstName" placeholder='first name' onChange={handleChange} />
                Last Name: <input type="text" name="lastName" className="lastName" placeholder='last name' onChange={handleChange} />
            </form>

        </div>

    );
}

export default App