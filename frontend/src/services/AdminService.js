import api from './api'; // Correct path

// Login Admin
export const loginAdmin = (credentials) => {
    return api.post('/admin/login', credentials);
};

// Create Admin
export const createAdmin = (admin) => {
    return api.post('/admin/register', admin);
};

// Get All Admins
export const getAllAdmins = () => {
    return api.get('/admin');
};
