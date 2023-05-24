import { Message } from './shared-types';

const API_URL = 'http://localhost:8080';
const API_VERSION = 'v1';

export const API = `${API_URL}/api/${API_VERSION}`;

export const ENDPOINTS = {
    PATIENT_ENDPOINT: 'patient',
    SCHEDULE_ENDPOINT: 'schedule',
    MEDICAL_STAFF_ENDPOINT: 'medicalStaff',
    BLOODTYPE_ENDPOINT: 'bloodType',
    DONATION_ENDPOINT: 'donation',
    BLOODBANK_ENDPOINT: 'bloodBank'
};

export const RESPONSE_MESSAGES = {
    SUCCESS: 'success',
    ERROR: 'error'
};

export const DEFAULT_MESSAGE: Message = {
    message: '',
    type: 'info',
    show: false
};