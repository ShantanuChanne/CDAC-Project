// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonial = () => {
    return (
        <section id="testimonial">
            <div className="testimonial-title">
                <h4>Testimonial</h4>
                <h1>What's Our Patient Says</h1>
            </div>
            <div className="testimonial-container">
                <div id="carouselExampleDark" class="carousel carousel-dark slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card testimonial-card testimonial-card-1">
                                        <img src={require('../Images/patientimg1.jpg')} className="testimonial-img" alt='' />
                                        <div className="card-body">
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu.</p>
                                            <h5 className="card-title">Dennis Green</h5>
                                            <p className="card-text"><small className="text-muted">Patient</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card testimonial-card testimonial-card-2">
                                        <img src={require('../Images/patientimg2.jpg')} className="testimonial-img" alt='' />
                                        <div className="card-body">
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu.</p>
                                            <h5 className="card-title">Dennis Green</h5>
                                            <p className="card-text"><small className="text-muted">Patient</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card testimonial-card testimonial-card-3">
                                        <img src={require('../Images/patientimg3.jpg')} className="testimonial-img" alt='' />
                                        <div className="card-body">
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu.</p>
                                            <h5 className="card-title">Dennis Green</h5>
                                            <p className="card-text"><small className="text-muted">Patient</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card testimonial-card testimonial-card-4">
                                        <img src={require('../Images/patientimg4.jpg')} className="testimonial-img" alt='' />
                                        <div className="card-body">
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu.</p>
                                            <h5 className="card-title">Dennis Green</h5>
                                            <p className="card-text"><small className="text-muted">Patient</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card testimonial-card testimonial-card-5">
                                        <img src={require('../Images/patientimg5.jpg')} className="testimonial-img" alt='' />
                                        <div className="card-body">
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu.</p>
                                            <h5 className="card-title">Dennis Green</h5>
                                            <p className="card-text"><small className="text-muted">Patient</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card testimonial-card testimonial-card-6">
                                        <img src={require('../Images/patientimg6.jpg')} className="testimonial-img" alt='' />
                                        <div className="card-body">
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu.</p>
                                            <h5 className="card-title">Dennis Green</h5>
                                            <p className="card-text"><small className="text-muted">Patient</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonial