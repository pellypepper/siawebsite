import React from "react";
import './form.css';
export default function Form() {
    return (
        <div className="form-wrapper">
            <form>
                  <h1>APPLY NOW</h1>
                  <div>
            
                    <input type="text" id="name" name="name"  placeholder="First Name" required />
         
    
                    <input type="text" id="name" name="name" placeholder="Last Name"  required />
          
                   
                  </div>
                  <input type="email" id="email" name="email" placeholder="Email" required />
                  <input type="number" id="number" name="number" placeholder="Phone Number" required />
                  <input type="text" id="address" name="address" placeholder="Address 1" required />
                  <input type="text" id="address" name="address" placeholder="Address 2" required />
                  <div>
                  <input type="text" id="city" name="city" placeholder="City" required />
                  <input type="text" id="county" name="county" placeholder="County" required />
                  </div>
                 
                  <input type="text" id="postcode" name="postcode" placeholder="Postcode" required />
                  <p>Do you have a Sia License ?</p>
                  <div className="radio-div">
                 
                      <label>
                        Yes
                        <input type="radio" placeholder="Yes" required />
                      </label>
                      <label>
                        No
                        <input type="radio" placeholder="Yes" required />
                      </label>
                  </div>
                  <input type="submit" value="Submit" />
            </form>
        </div>
    )
}