import axios, { HttpStatusCode } from 'axios';
import { API, ENDPOINTS } from '../../shared-constants';
import { IBloodBank } from './bloodBank-types';

export default function getBloodBanks(callback: (bloodBank: IBloodBank[] | null) => void) {
    axios.get(`${API}/${ENDPOINTS.BLOODBANK_ENDPOINT}`).then((response) => {
        if(response.status === HttpStatusCode.Ok && response.data) {
            callback(response.data.fetchedBloodBank);
        } else {
            callback(null);
        }
    }).catch();
}