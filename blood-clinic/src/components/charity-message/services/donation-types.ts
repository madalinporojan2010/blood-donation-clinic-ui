import { IMedicalStaff } from '../../../shared/services/medical-staff/medicalStaff-types';

export interface IDonation {
    id: number;
    cause: string;
    raisedAmmount: number;
    phone: string;
    medicalStaff: IMedicalStaff;
}