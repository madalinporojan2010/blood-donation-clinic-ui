import axios, { HttpStatusCode } from 'axios';
import { API, ENDPOINTS } from '../../../../shared/shared-constants';
import { ISchedule } from './schedule-types';

export default function saveSchedule(schedule: ISchedule, callback: (message: string | null) => void) {
    axios.post(`${API}/${ENDPOINTS.SCHEDULE_ENDPOINT}`, {schedule: schedule}).then((response) => {
        if(response.status === HttpStatusCode.Ok && response.data) {
            callback(response.data.message);
        } else {
            callback(null);
        }
        
    }).catch();
}
