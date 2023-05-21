
export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';

export interface FormProps {
    FullName: string;
    PhoneNumber: string;
    Age: number;
    CNP: string;
    BloodType: BloodType | undefined;
    FullAddress: string;
    EmergencyContactFullName: string;
    EmergencyContactPhoneNumber: string;
    ScheduleDate: Date;
}