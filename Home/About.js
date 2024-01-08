const About = () => {
    return (

        <section id="about">
            <div className="about-container">
                <div className="row">
                    <div className="col">
                        <img src={require('../Images/doctorimg.jpg')} alt="" />
                    </div>
                    <div className="col about-info">
                        <h1>Proud to be one of the nations best</h1>
                        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu. Integer pulvinar cursus ultrices. In quis ultrices felis. Duis ultricies mi a sapien viverra, id dictum diam tincidunt. Phasellus nec dapibus libero, sed scelerisque ligula</p>
                        <p className="para">Proin eget justo quis mi eleifend dapibus quis vitae felis. Mauris dignissim vitae eros vel lobortis. Etiam auctor, magna a elementum porttitor, purus nisi ornare dolor, eu tristique enim eros sed lacus. Pellentesque ligula velit, pharetra lobortis aliquet eu, euismod quis magna.</p>
                        <button className="btn btn-outline-primary">Learn more</button>
                    </div>
                </div>
            </div>
            <div className="doctor-container">
                <h2 className="doctor-title">Our Experienced Doctors.</h2>
            </div>
            <div className="card-container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <div className="front">
                                <img src={require('../Images/doctorimg1.jpg')} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Aldin Powell</h5>
                                    <p className="card-text">Cardiologist</p>
                                </div>
                            </div>
                            <div className="back">
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu."</p>
                                <h5 className="card-title">Aldin Powell</h5>
                                <p className="card-text">Cardiologist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="front">
                                <img src={require('../Images/doctorimg2.jpg')} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Aldin Powell</h5>
                                    <p className="card-text">Neurologist</p>
                                </div>
                            </div>
                            <div className="back">
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu."</p>
                                <h5 className="card-title">Aldin Powell</h5>
                                <p className="card-text">Cardiologist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="front">
                                <img src={require('../Images/doctorimg3.jpg')} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Aldin Powell</h5>
                                    <p className="card-text">Dentist</p>
                                </div>
                            </div>
                            <div className="back">
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu."</p>
                                <h5 className="card-title">Aldin Powell</h5>
                                <p className="card-text">Cardiologist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="front">
                                <img src={require('../Images/doctorimg4.jpg')} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Aldin Powell</h5>
                                    <p className="card-text">Ophthalmologists</p>
                                </div>
                            </div>
                            <div className="back">
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu."</p>
                                <h5 className="card-title">Aldin Powell</h5>
                                <p className="card-text">Cardiologist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About