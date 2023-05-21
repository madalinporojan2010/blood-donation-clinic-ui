import axios, { HttpStatusCode } from 'axios';
import { API } from '../../../../shared/shared-constants';
import { ISchedule } from './schedule-types';

export default function savePatient(schedule: ISchedule, callback: (schedule: ISchedule | null) => void) {
    axios.post(`${API}/schedule`, {schedule: schedule}).then((response) => {
        if(response.status === HttpStatusCode.Ok) {
            callback(response.data);
        } else {
            callback(null);
        }
    // eslint-disable-next-line no-console
    }).catch(err => console.log(err));
}
