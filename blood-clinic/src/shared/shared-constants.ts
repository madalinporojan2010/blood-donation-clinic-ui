const API_URL = 'http://localhost:8080';
const API_VERSION = 'v1';

export const API = `${API_URL}/api/${API_VERSION}`;

export const ENDPOINTS = {
    PATIENT_ENDPOINT: 'patient',
    SCHEDULE_ENDPOINT: 'schedule',
    MEDICAL_STAFF_ENDPOINT: 'medicalStaff',
    BLOODTYPE_ENDPOINT: 'bloodType'
};

export const RESPONSE_MESSAGES = {
    SUCCESS: 'success',
    ERROR: 'error'
};