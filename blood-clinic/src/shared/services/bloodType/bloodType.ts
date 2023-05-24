
import axios, { HttpStatusCode } from 'axios';
import { API, ENDPOINTS } from '../../shared-constants';
import { IBloodType } from './bloodTypes-types';

export default function getBloodTypes(callback: (bloodTypes: IBloodType[] | null) => void) {
    axios.get(`${API}/${ENDPOINTS.BLOODTYPE_ENDPOINT}`).then((response) => {
        if(response.status === HttpStatusCode.Ok && response.data) {
            callback(response.data.fetchedBloodTypes);
        } else {
            callback(null);
        }
    }).catch();
}
