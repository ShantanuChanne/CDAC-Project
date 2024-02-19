import './App.css';
import HomePage from './Components/Home/HomePage';
import HospitalRegistration from './Components/Home/HospitalRegistration';
import PatientRegistration from './Components/Home/PatientRegistration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Components/Home/SignIn';
import PatientHome from './Components/Patient/PatientHome';
import ViewAppointment from './Components/Patient/ViewAppointment';
import BookAppointment from './Components/Patient/BookAppointment';
import ViewDoctor from './Components/Patient/ViewDoctor';
import PatientUpdateProfile from './Components/Patient/PatientUpdateProfile';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/patientRegistration' element={<PatientRegistration />} />
          <Route path='/hospitalRegistration' element={<HospitalRegistration />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/patientHome' element={<PatientHome />} />
          <Route path='/viewAppointment' element={<ViewAppointment />} />
          <Route path='/bookAppointment' element={<BookAppointment />} />
          <Route path='/viewDoctor' element={<ViewDoctor />} />
          <Route path='/patientUpadateProfile' element={<PatientUpdateProfile />} />
        </Routes>
      </div>
    </BrowserRouter>


  )
}

export default App;
