import { FormProps } from './charity-message-types';
import { IDonation } from './services/donation-types';

export const DEFAULT_DONATION_DATA: FormProps = {
    causeID: 0,
    raisedAmmount: 0
};

export const DEFAULT_DONATION: IDonation = {
    id: 0,
    cause: '',
    raisedAmmount: 0,
    phone: '',
    medicalStaff: {
        id: 0,
        age: 0,
        cnp: '',
        name: '',
        phone: '',
        specialization: ''
    }
};

export const ERROR_MESSAGES = {
    FETCH_MEDICAL_DATA: 'There was an unexpected error when fetching the donation cause data. Please come back another time!',
    UPDATE_DONATION_DATA: 'There was an unexpected error when updating the donation data. Please come back another time!'
};

export const INFO_MESSAGES = {
    SELECT_CAUSE: 'You must select a cause if you want to donate to charity!',
    VALID_AMMOUNT: 'You must enter a valid ammount!',
    SUCCESS: 'Thank you for your donation and kindness!'
};