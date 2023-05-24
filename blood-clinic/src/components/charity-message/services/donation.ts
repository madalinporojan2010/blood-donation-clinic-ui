
import axios, { HttpStatusCode } from 'axios';
import { API, ENDPOINTS } from '../../../shared/shared-constants';
import { IDonation } from './donation-types';

export function getDonations(callback: (donation: IDonation[] | null) => void) {
    axios.get(`${API}/${ENDPOINTS.DONATION_ENDPOINT}`).then((response) => {
        if(response.status === HttpStatusCode.Ok && response.data) {
            callback(response.data.fetchedDonations);
        } else {
            callback(null);
        }
    }).catch();
}

export function updateDonation(donation: IDonation, callback: (message: string | null) => void) {
    axios.put(`${API}/${ENDPOINTS.DONATION_ENDPOINT}`, {donation: donation}).then((response) => {
        if(response.status === HttpStatusCode.Ok && response.data) {
            callback(response.data.message);
        } else {
            callback(null);
        }
    }).catch();
}