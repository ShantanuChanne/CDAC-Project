const Navbar = () => {
    return (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        //     <a className="navbar-brand" href="">Project name</a>
        //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse navtext" id="navbarSupportedContent">
        //         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        //             <li className="nav-item active">
        //                 <a className="nav-link" aria-current="page" href="">Home</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#services">Services</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#about">About</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#contact">Contact</a>
        //             </li>
        //             <li className="nav-item dropdown">
        //                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sign up</a>
        //                 <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
        //                     <li><a className="dropdown-item" href="#">Patient Registration</a></li><hr/>
        //                     <li><a className="dropdown-item" href="#">Hospital Registration</a></li>
        //                 </ul>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Sign In</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>

        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Offcanvas navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item active">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sign up</a>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/patientRegistration">Patient Registration</a></li><hr />
                                    <li><a className="dropdown-item" href="/hospitalRegistration">Hospital Registration</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signin">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar