import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminRegister from './components/AdminRegister'; // Adjust path as necessary
import AdminForm from './components/AdminForm'; // Import AdminForm if needed

function App() {
    return (
        <Router>
            <Routes>
            <Route path="/login" element={<AdminLogin />} />
                <Route path="/register" element={<AdminRegister />} />
                <Route path="/dashboard" element={<AdminForm />} />
                <Route path="/doctorLogin" element={<DoctorLogin />} />
                <Route path="/doctorForm" element={<DoctorForm />} />
                <Route path="/patientLogin" element={<PatientLogin />} />
                <Route path="/patientForm" element={<PatientForm />} />
                <Route path="/adminDashboard" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
