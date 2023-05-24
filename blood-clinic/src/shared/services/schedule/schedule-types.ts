import { IMedicalStaff } from '../medical-staff/medicalStaff-types';
import { IBloodType, IPatient } from '../patient/patient-types';

export interface ISchedule {
    patient: IPatient;
    medicalStaff: IMedicalStaff;
    arrivalTime: Date;
    bloodType: IBloodType;
}