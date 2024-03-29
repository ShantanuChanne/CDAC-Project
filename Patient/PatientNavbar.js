const PatientNavbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">Offcanvas dark navbar</a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav  flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/patientHome">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/viewAppointment">View Appointment</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/bookAppointment">Book Appointment</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/patientUpadateProfile">Update Profile</a>
                                </li>
                            </ul>
                            <form class="d-flex mt-3" action="/signin">
                                <label>Welcome</label>
                                <button class="btn btn-success" type="submit" >Logout</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default PatientNavbar