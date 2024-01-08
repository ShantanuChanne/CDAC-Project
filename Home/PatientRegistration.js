import Navbar from './Navbar'
import './Registration.css'

const PatientRegistration = () => {
    return (
        <div className='regdiv'>
        <Navbar />

        <div className='registration-box ms-auto mb-2 mb-lg-0'>
            <form>
                
                    <div className="title">
                        <h3>Patient Registration Form</h3>
                    </div>
                    <div className="input-field">
                        <label>First Name:</label>
                        <input type="text" id="firstName" className="input" name="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="input-field">
                        <label>Last Name:</label>
                        <input type="text" id="lastfirstName" className="input" name="LastName" placeholder="Enter your last name" />
                    </div>
                    <div className="input-field">
                        <label>Gender:</label>
                        <input type="radio" id="gender" name="gender" className="input-radio" value="Male" />Male
                        <input type="radio" id="gender" name="gender" className="input-radio" value="Female" />Female
                    </div>
                    <div className="input-field">
                        <label> Blood Group:</label>
                        <input type="text" id="bloodGroup" className="input" name="bloodGroup" placeholder="Enter your blood group" />
                    </div>
                    <div className="input-field">
                        <label>Mobile Number:</label>
                        <input type="text" id="mobileNo" className="input" name="mobileNo" placeholder="Enter mobile number" />
                    </div>
                    <div className="input-field">
                        <label>Date of Birth:</label>
                        <input type="date" id="dob" className="input" name="dob" placeholder="Enter date of birth" />
                    </div>
                    <div className="input-field">
                        <label>Email:</label>
                        <input type="email" id="email" className="input" name="email" placeholder="Enter email address" />
                    </div>
                    <div className="input-field">
                        <label>Enter Password:</label>
                        <input type="password" id="password" className="input" name="password" placeholder="Enter your password" />
                    </div>
                    <div className="input-field">
                        <label>Confirm Password:</label>
                        <input type="password" id="confirmPassword" className="input" name="confirmPassword" placeholder="Enter password again" />
                    </div>
                    <div className="input-button">
                        <button className="btn btn-outline-primary">Sign Up</button>
                        <button className="btn btn-outline-primary" type="reset">Clear</button>
                    </div>
                    <div className="input-link">
                        Already have an account? <a href="/signin">Sign In here.</a>
                    </div>
               
            </form>
        </div>

        </div>
    )
}

export default PatientRegistration