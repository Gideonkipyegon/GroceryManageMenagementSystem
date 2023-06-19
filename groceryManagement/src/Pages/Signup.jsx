import React from "react"

function Signup() {
    return (
        <div className="signup">
            <form action="" className="form">
             <fieldset><legend>Sign-Up</legend>
                    
              <label htmlFor="">First Name:</label> 
              <input type="text" placeholder="firstName" required/>
              <label htmlFor="">Middle Name:</label> 
              <input type="text" placeholder="middleName" />  
              <label htmlFor="">Last Name:</label> 
              <input type="text" placeholder="lastName" required/> 
              <label htmlFor="">Password:</label> 
              <input type="password" placeholder="Password" required/> 
              <label htmlFor="">ConfirmPassword:</label> 
              <input type="password" placeholder="ConfirmPassword" required/>
              <button>Submit</button>
              </fieldset>
            </form>
        </div>
    )
}
export default Signup