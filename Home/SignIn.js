import Navbar from './Navbar'
import './Registration.css'

const SignIn = () => {
    return (
        <div className='regdiv'>
            <Navbar />

            <div className='registration-box ms-auto mb-2 mb-lg-0'>
                <form>
                    <div className="title">
                        <h3>Sign In</h3>
                    </div>
                    <div className="input-field">
                        <label>Email:</label>
                        <input type="email" id="email" className="input" name="email" placeholder="Enter email address" />
                    </div>
                    <div className="input-field">
                        <label>Enter Password:</label>
                        <input type="password" id="password" className="input" name="password" placeholder="Enter your password" />
                    </div>
                    <div className="input-button">
                        <button className="btn btn-outline-primary">Sign In</button>
                        <button className="btn btn-outline-primary" type="reset">Clear</button>
                    </div>
                    <div className="input-link">
                        Don't have an account? <a href="">Register here.</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn