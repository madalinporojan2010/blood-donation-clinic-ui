
import axios, { HttpStatusCode } from 'axios';
import { API, ENDPOINTS } from '../../shared-constants';
import { IPatient } from './patient-types';

export function savePatient(patient: IPatient, callback: (patient: IPatient | null) => void) {
    axios.post(`${API}/${ENDPOINTS.PATIENT_ENDPOINT}`, {patient: patient}).then((response) => {
        if(response.status === HttpStatusCode.Ok && response.data) {
            callback(response.data.entity);
        } else {
            callback(null);
        }
    }).catch();
}

export function updatePatient(patient: IPatient, callback: (patient: IPatient | null) => void) {
    axios.put(`${API}/${ENDPOINTS.PATIENT_ENDPOINT}`, {patient: patient}).then((response) => {
        if(response.status === HttpStatusCode.Ok && response.data) {
            callback(response.data.entity);
        } else {
            callback(null);
        }
    }).catch();
}

export function getPatients(callback: (patients: IPatient[] | null) => void) {
    axios.get(`${API}/${ENDPOINTS.PATIENT_ENDPOINT}`).then((response) => {
        if(response.status === HttpStatusCode.Ok && response.data) {
            callback(response.data.fetchedPatients);
        } else {
            callback(null);
        }
    }).catch();
}