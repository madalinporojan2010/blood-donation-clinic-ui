
import axios, { HttpStatusCode } from 'axios';
import { API, ENDPOINTS } from '../../../../shared/shared-constants';
import { IPatient } from './patient-types';

export default function savePatient(patient: IPatient, callback: (patient: IPatient | null) => void) {
    axios.post(`${API}/${ENDPOINTS.PATIENT_ENDPOINT}`, {patient: patient}).then((response) => {
        if(response.status === HttpStatusCode.Ok && response.data) {
            callback(response.data.entity);
        } else {
            callback(null);
        }
    }).catch();
}
