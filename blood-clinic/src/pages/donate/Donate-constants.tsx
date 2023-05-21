import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FormProps } from './Donate-types';

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const maxDate = new Date(`${today.getFullYear() + 10}-01-01`);

export const DATE_PICKER_OPTS = {
    title: 'Appointment Date',
    autoHide: true,
    todayBtn: false,
    clearBtn: false,
    maxDate: maxDate,
    minDate: today,
    theme: {
        background: 'bg-gray-700 dark:bg-gray-800',
        todayBtn: '',
        clearBtn: '',
        icons: '',
        text: '',
        disabledText: 'bg-gray-700 rounded-full',
        input: '',
        inputIcon: '',
        selected: ''
    },
    icons: {
        // () => ReactElement | JSX.Element
        prev: () => <ArrowBackIosNewIcon></ArrowBackIosNewIcon>,
        next: () => <ArrowForwardIosIcon></ArrowForwardIosIcon>
    },
    datepickerClassNames: 'top-4/5',
    defaultDate: tomorrow,
    language: 'en'
};

export const DEFAULT_PATIENT_DATA: FormProps = {
    FullName: '',
    PhoneNumber: '',
    Age: 0,
    CNP: '',
    BloodType: undefined,
    FullAddress: '',
    EmergencyContactFullName: '',
    EmergencyContactPhoneNumber: '',
    ScheduleDate: tomorrow
};