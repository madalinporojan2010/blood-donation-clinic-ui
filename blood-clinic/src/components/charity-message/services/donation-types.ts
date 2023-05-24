import { IMedicalStaff } from '../../../pages/donate/services/medical-staff/medical-staff-types';

export interface IDonation {
    id: number;
    cause: string;
    raisedAmmount: number;
    phone: string;
    medicalStaff: IMedicalStaff;
}