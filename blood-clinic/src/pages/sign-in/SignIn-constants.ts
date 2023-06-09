import { FormProps } from './SignIn-types';

export const ERROR_MESSAGES = {
    FETCH_MEDICAL_DATA: 'There was an unexpected error when fetching the medical staff data. Please come back another time!',
    SIGN_IN: 'There was an unexpected error when signin in. Please come back another time!'
};

export const INFO_MESSAGES = {
    SIGN_IN: 'You must provide valid credentials. Please try again or contact the administrator!'
};

export const DEFAULT_SIGNIN_DATA: FormProps = {
    idNumber: '',
    password: ''
};

export const PATIENTS_PAGE_PATH = '/patients';