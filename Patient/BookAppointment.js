import PatientNavbar from "./PatientNavbar"

const BookAppointment = () => {
    return (
        <div className="book-contianer">
            <PatientNavbar />
            <label>Search by Department :</label>
            <select className="form-select" aria-label="Default select example">
                <option>Select a Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Dental</option>
                <option>Mental Health</option>
                <option>Cancer Care</option>
            </select>

            <div className="book-table">
                <table className="table table-success">
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Hospital Name</th>
                            <th>Doctor Name</th>
                            <th>Speciality</th>
                            <th>Department</th>
                            <th>Charges</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ABC</td>
                            <td>XYZ</td>
                            <td>mbbs</td>
                            <td>BBB</td>
                            <td>3000</td>
                            <td>
                                <form action="/viewDoctor">
                                    <button className="btn btn-primary">View Doctor</button>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BookAppointment