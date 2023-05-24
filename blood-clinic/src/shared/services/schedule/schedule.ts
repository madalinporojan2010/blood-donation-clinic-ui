import axios, { HttpStatusCode } from 'axios';
import { API, ENDPOINTS } from '../../shared-constants';
import { ISchedule } from './schedule-types';

export function saveSchedule(schedule: ISchedule, callback: (message: string | null) => void) {
    axios.post(`${API}/${ENDPOINTS.SCHEDULE_ENDPOINT}`, {schedule: schedule}).then((response) => {
        if(response.status === HttpStatusCode.Ok && response.data) {
            callback(response.data.message);
        } else {
            callback(null);
        }
        
    }).catch(() => callback(null));
}

export function getSchedules(callback: (schedules: ISchedule[] | null) => void) {
    axios.get(`${API}/${ENDPOINTS.SCHEDULE_ENDPOINT}`).then((response) => {
        if(response.status === HttpStatusCode.Ok && response.data) {
            callback(response.data.fetchedSchedules);
        } else {
            callback(null);
        }
    }).catch();
}