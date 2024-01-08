const Contact = () => {
    return (
        <section id="contact">
                <div className="contact-container">
                    <h3 className='contact-title'>Contact Us</h3>
                    <h1 className="contact-text">Always connect with us.</h1>
                    <div className="mb-3">
                        <input type="email" placeholder="Email Address*" />
                    </div>
                    <div className="mb-3">
                        <input type="text"  placeholder="Subject*" />
                    </div>
                    <div className="mb-3">
                        <textarea placeholder="Your Message*" rows={5}/>
                    </div>
                    <button className="btn btn-outline-primary">Submit</button>
                </div>
            </section>
    )
}

export default Contact