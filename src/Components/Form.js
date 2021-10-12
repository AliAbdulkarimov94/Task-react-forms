import React from 'react'
import SideInfo from './SideInfo'


function Form() {

    return (
        <div className="form-page">

            <form Addstudent ="add-student">
            
             <label>
             <input type="text" name="Name"/>
            </label>
             <input type="text" name="LastName"/>
             <label>
               <input type="text"  name="phonenumber"/>
             </label>
             <input type="text"  name="Power"/>
             <label>
             <input type="text"  name="emailAddress"/>
             </label> 
            </form>
            <SideInfo />

        </div>
    )
}

export default Form
