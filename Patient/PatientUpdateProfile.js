import PatientNavbar from "./PatientNavbar"

const PatientUpdateProfile = () => {
    return (
        <div className='regdiv'>
            <PatientNavbar />

            <div className='registration-box ms-auto mb-2 mb-lg-0'>
                <form>
                    <div className="title">
                        <h3>Update Profile</h3>
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
                        <label>Mobile Number:</label>
                        <input type="text" id="mobileNo" className="input" name="mobileNo" placeholder="Enter mobile number" />
                    </div>
                    <div className="input-field">
                        <label>Email:</label>
                        <input type="email" id="email" className="input" name="email" placeholder="Enter email address" />
                    </div>
                    <div className="input-field">
                        <label>Password:</label>
                        <input type="password" id="password" className="input" name="password" placeholder="Enter your password" />
                    </div>
                    <div className="input-button">
                        <button className="btn btn-outline-primary">Update</button>
                        <button className="btn btn-outline-primary" type="reset">Clear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PatientUpdateProfile