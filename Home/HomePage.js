import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import './HomePage.css'
import Navbar from './Navbar'
import Services from './Services'
import Testimonial from './Testimonial'

let HomePage = () => {
    return (
        <div className='homepage'>
            {/* Navbar Section */}
            <section className="coloured-section" id="title">
                <div className="navbar-container">
                    <Navbar />
                    <div className="row">
                        <div className="container">
                            <img src={require('../Images/doctor.jpg')} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services">
                <div className="service-container">
                    <h2 className="service-title">Our Medical Services.</h2>
                    <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <Services />
            </section>

            {/* About Section */}
            <About />

            {/*Testomonial Section */}
            <Testimonial />

            {/*Contact Section*/}
            <Contact />

            {/*Footer Section*/}
            <Footer />


        </div >

    )
}

export default HomePage


