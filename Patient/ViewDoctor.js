import PatientNavbar from "./PatientNavbar"
import React, { useState } from "react"

const ViewDoctor = () => {

   const [slot, setSlots] = useState(false)
   const showSlots = () => {
      setSlots(true)
   }
   return (
      <div className="viewDoctor-container">
         <PatientNavbar />
         <h1>Doctor Profile</h1>
         <div class="container text-center">
            <div class="row">
               <div class="col-6 col-sm-4 col-profile">
                  <p>Name : </p>
                  <p>Gender : </p>
                  <p>Specialization : </p>
                  <p>Experience : </p>
                  <p>Charges : </p>
               </div>
               <div class="col-6 col-sm-4 slot-book">
                  <label>Select Date : </label>
                  <input type="date" className="form-control" />
                  <button className="btn btn-outline-primary" onClick={showSlots}>Get Slot</button>
               </div>


               <div class="w-100 d-none d-md-block"></div>

               <div class="col-6 col-sm-4 contact-details">
                  <h3>Contact Details</h3>
                  <p>Mobile No. : </p>
                  <p>Email : </p>
               </div>
               <div class="col-6 col-sm-4">
                  {
                     slot && (<div className="slot-container ">

                        <select className="form-select" aria-label="Default select example">
                           <option selected>Select Slot</option>
                           <option>7.30</option>
                           <option>8.00</option>
                           <option>8.30</option>
                           <option>9.00</option>
                        </select>

                        <button className="btn btn-success">Book Slot</button>
                     </div>
                     )}
               </div>
            </div>
         </div>

      </div>
   )
}

export default ViewDoctor