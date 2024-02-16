import "./PatientHome.css"
import PatientNavbar from "./PatientNavbar"

const ViewAppointment = () => {
    return (
        <div className="appointment-container">
            <PatientNavbar />
            <table className="table table-success">
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Doctor Name</th>
                        <th>Department</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ABC</td>
                        <td>XYZ</td>
                        <td>29-02-2024</td>
                        <td>7.30</td>
                        <td>Confirm</td>
                        <td>
                            <button className="btn btn-danger">Cancel</button>
                        </td>
                    </tr>
                    <tr>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>
                            <button className="btn btn-danger">Cancel</button>
                        </td>
                    </tr>
                    <tr>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>
                            <button className="btn btn-danger">Cancel</button>
                        </td>
                    </tr>
                    <tr>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>
                            <button className="btn btn-danger">Cancel</button>
                        </td>
                    </tr>
                    <tr>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>casasdasd</td>
                        <td>
                            <button className="btn btn-danger">Cancel</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ViewAppointment