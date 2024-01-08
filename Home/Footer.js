import { FaFacebook, FaGooglePlusG, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <section id="footer">
            <footer>
                <dev className="footer-container">
                    <div className="row">
                        <div className="col">
                            <div className="footer-text-1">
                                <p>Emergency Care</p>
                                <p>Check Up</p>
                                <p>Check Up</p>
                                <p>Treatment of Personal Diseases</p>
                                <p>Check Up</p>
                            </div>
                        </div>
                        <div className="col">
                            <h4>Services</h4>
                            <div className="footer-text">
                                <p>Emergency Care</p>
                                <p>Check Up</p>
                                <p>Emergency Dental Care</p>
                                <p>Check Up</p>
                                <p>Treatment of Personal Diseases</p>
                                <p>Check Up</p>
                                <p>Check Up</p>
                                <p>Check Up</p>
                            </div>

                        </div>
                        <div className="col">
                            <h4>Departments</h4>
                            <div className="footer-text">
                                <p>Emergency Care</p>
                                <p>Cardiology</p>
                                <p>Neurology</p>
                                <p>Dental</p>
                                <p>Cancer Care</p>
                                <p>Mental Health</p>
                                <p>Heart & Vascular</p>
                                <p>Critical Care</p>
                                <p>Ophthalmologists</p>
                                <p>Pulmonologists</p>
                            </div>

                        </div>
                        <div className="col">
                            <h4>Our Address</h4>
                            <div className="footer-text">
                                <p>New York - 101010 Hudson<br />Yards.</p>
                                <FaFacebook /> <FaGooglePlusG /> <FaXTwitter /><br/>
                                <label>Call Now</label><br/>
                                <button className="bttn">+2025550295</button>
                            </div>
                        </div>
                    </div>
                </dev>
            </footer>
        </section>
    )
}

export default Footer