import { MessageType } from '../../components/message-box/message-box-types';

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
    MedicalStaff: number | undefined;
}

export interface Message {
    message: string;
    type: MessageType;
    show: boolean;
}