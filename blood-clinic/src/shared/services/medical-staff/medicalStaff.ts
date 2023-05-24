
import axios, { HttpStatusCode } from 'axios';
import { API, ENDPOINTS } from '../../shared-constants';
import { IMedicalStaff } from './medicalStaff-types';

export default function getMedicalStaff(callback: (medicalStaffs: IMedicalStaff[] | null) => void) {
    axios.get(`${API}/${ENDPOINTS.MEDICAL_STAFF_ENDPOINT}`).then((response) => {
        if(response.status === HttpStatusCode.Ok && response.data) {
            callback(response.data.fetchedMedicalStaffs);
        } else {
            callback(null);
        }
    }).catch();
}
