import {  FaHeartbeat, FaTooth, FaRibbon, FaEye, FaLungsVirus } from "react-icons/fa";
import { GiBrain, GiHeartOrgan } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaBedPulse, FaArrowRight } from "react-icons/fa6";
const Services = () => {
    return (
        <div className="container ser-container">
            <div className="row">
                <div className="col">
                    <h5 className="service-title"><FaHeartbeat /> Cardiology</h5>
                    <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu.</p>
                    <button className="btn btn-outline-primary"><FaArrowRight /></button>
                    <span className="service-number num-1">1</span>
                </div>
                <div className="col">
                    <h5 className="service-title"><GiBrain /> Neurology</h5>
                    <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu.</p>
                    <button className="btn btn-outline-primary"><FaArrowRight /></button>
                    <span className="service-number num-2">2</span>
                </div>
                <div className="col">
                    <h5 className="service-title"><FaTooth /> Dental</h5>
                    <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu.</p>
                    <button className="btn btn-outline-primary"><FaArrowRight /></button>
                    <span className="service-number num-3">3</span>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5 className="service-title"><FaRibbon /> Cancer Care</h5>
                    <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu.</p>
                    <button className="btn btn-outline-primary"><FaArrowRight /></button>
                    <span className="service-number num-4">4</span>
                </div>
                <div className="col">
                    <h5 className="service-title"><RiMentalHealthFill /> Mental Health</h5>
                    <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu.</p>
                    <button className="btn btn-outline-primary"><FaArrowRight /></button>
                    <span className="service-number num-5">5</span>
                </div>
                <div className="col">
                    <h5 className="service-title"><GiHeartOrgan /> Heart & Vascular</h5>
                    <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu.</p>
                    <button className="btn btn-outline-primary"><FaArrowRight /></button>
                    <span className="service-number num-6">6</span>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5 className="service-title"><FaBedPulse /> Critical Care</h5>
                    <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu.</p>
                    <button className="btn btn-outline-primary"><FaArrowRight /></button>
                    <span className="service-number num-7">7</span>
                </div>
                <div className="col">
                    <h5 className="service-title"><FaEye /> Ophthalmologists</h5>
                    <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu.</p>
                    <button className="btn btn-outline-primary"><FaArrowRight /></button>
                    <span className="service-number num-8">8</span>
                </div>
                <div className="col">
                    <h5 className="service-title"><FaLungsVirus /> Pulmonologists</h5>
                    <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta sollicitudin magna, non congue ligula scelerisque eu.</p>
                    <button className="btn btn-outline-primary"><FaArrowRight /></button>
                    <lable className="service-number num-9">9</lable>

                </div>
            </div>
        </div>
    )
}

export default Services