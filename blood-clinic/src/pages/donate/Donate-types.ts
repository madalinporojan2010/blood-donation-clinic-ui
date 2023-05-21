
export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';

export const BLOOD_TYPES = new Map<BloodType, number> ([
    ['A-', 1],
    ['A+', 2],
    ['B-', 3],
    ['B+', 4],
    ['O-', 5],
    ['O+', 6],
    ['AB-', 7],
    ['AB+', 8]
]);

export interface FormProps {
    FullName: string;
    PhoneNumber: string;
    Age: number;
    CNP: string;
    BloodType: number | undefined;
    FullAddress: string;
    EmergencyContactFullName: string;
    EmergencyContactPhoneNumber: string;
    ScheduleDate: Date;
}