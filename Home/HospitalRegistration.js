import Navbar from './Navbar'
import './Registration.css'

const HospitalRegistration = () => {
    return (
        <div className='regdiv'>
            <Navbar />
            <div className='registration-box ms-auto mb-2 mb-lg-0'>
                <form>
                    <div className="title">
                        <h3>Hospital Registration Form</h3>
                    </div>
                    <div className="input-field">
                        <label>First Name:</label>
                        <input type="text" id="firstName" className="input" name="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="input-field">
                        <label>Mobile Number:</label>
                        <input type="text" id="mobileNo" className="input" name="mobileNo" placeholder="Enter mobile number" />
                    </div>
                    <div className="input-field">
                        <label>Address:</label>
                        <input type="text" id="address" className="input" name="address" placeholder="Enter your address" />
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

export default HospitalRegistration