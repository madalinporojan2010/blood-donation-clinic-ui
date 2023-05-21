
import axios, { HttpStatusCode } from 'axios';
import { API } from '../../../../shared/shared-constants';
import { IPatient } from './patient-types';

export default function savePatient(patient: IPatient, callback: (patient: IPatient | null) => void) {
    axios.post(`${API}/patient`, {patient: patient}).then((response) => {
        if(response.status === HttpStatusCode.Ok) {
            callback(response.data);
        } else {
            callback(null);
        }
    // eslint-disable-next-line no-console
    }).catch(err => console.log(err));
}
