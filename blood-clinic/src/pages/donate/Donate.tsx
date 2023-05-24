
import { useEffect, useState } from 'react';
import Datepicker from 'tailwind-datepicker-react';
import CharityMessage from '../../components/charity-message/charity-message';
import MessageBox from '../../components/message-box/message-box';
import TimePicker from '../../components/time-picker/time-picker';
import getMedicalStaff from '../../shared/services/medical-staff/medicalStaff';
import { IMedicalStaff } from '../../shared/services/medical-staff/medicalStaff-types';
import { savePatient } from '../../shared/services/patient/patient';
import { IBloodType, IPatient } from '../../shared/services/patient/patient-types';
import { saveSchedule } from '../../shared/services/schedule/schedule';
import { ISchedule } from '../../shared/services/schedule/schedule-types';
import { DEFAULT_MESSAGE, RESPONSE_MESSAGES } from '../../shared/shared-constants';
import { Message } from '../../shared/shared-types';
import { DATE_PICKER_OPTS, DEFAULT_PATIENT_DATA, ERROR_MESSAGES, INFO_MESSAGES } from './Donate-constants';
import { FormProps } from './Donate-types';
import getBloodTypes from './services/bloodType/bloodType';

function Donate() {
    const [patientData, setPatientData] = useState<FormProps>(DEFAULT_PATIENT_DATA);
    const [fetchedMedicalStaffs, setFetchedMedicalStaffs] = useState<IMedicalStaff[]>();
    const [fetchedBloodTypes, setFetchedBloodTypes] = useState<IBloodType[]>();

    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    const [message, setMessage] = useState<Message>(DEFAULT_MESSAGE);
    
    const [showCharityMessage, setShowCharityMessage] = useState<boolean>(false);

    useEffect(() => {
        getMedicalStaff((medicalStaffs: IMedicalStaff[] | null) => {
            if(medicalStaffs !== null) {
                setFetchedMedicalStaffs(medicalStaffs);
            } else {
                setMessage({
                    message: ERROR_MESSAGES.FETCH_MEDICAL_DATA,
                    type: 'error',
                    show: true
                });
            }
        });
        
        getBloodTypes((bloodTypes: IBloodType[] | null) => {
            if(bloodTypes !== null) {
                setFetchedBloodTypes(bloodTypes);
            } else {
                setMessage({
                    message: ERROR_MESSAGES.FETCH_BLOOD_TYPE_DATA,
                    type: 'error',
                    show: true
                });
            }
        });
    }, []);

    const closeMessage = () => {
        const newMessage = {...message};
        newMessage.show = false;
        setMessage(newMessage);
    };

    const renderInfoMessageComponent = () => {
        if(message.show) {
            return (<MessageBox message={message.message} messageType={message.type} onClose={()=>{closeMessage();}}></MessageBox>);
        }
    };
    
    const renderCharityMessageComponent = () => {
        if(showCharityMessage) {
            return (<CharityMessage></CharityMessage>);
        }
    };

    const schedule = () => {
        savePatient({
            name: patientData.FullName,
            age: patientData.Age,
            address: patientData.FullAddress,
            phone: patientData.PhoneNumber,
            cnp: patientData.CNP,
            contactPersonName: patientData.EmergencyContactFullName,
            contactPersonPhone: patientData.EmergencyContactPhoneNumber,
            bloodType: patientData.BloodType !== undefined ? {id: patientData.BloodType} : null
        } as IPatient, (savedPatient) => {
            if(savedPatient !== null) {
                saveSchedule({
                    patient: {id: savedPatient?.id},
                    medicalStaff: {id: patientData.MedicalStaff},
                    arrivalTime: patientData.ScheduleDate,
                    bloodType: {id: patientData.BloodType}
                } as ISchedule, (message: string | null) => {                    
                    if(message === null || !message.includes(RESPONSE_MESSAGES.SUCCESS)) {
                        setMessage({
                            message: ERROR_MESSAGES.SAVE_SCHEDULE,
                            type: 'error',
                            show: true
                        });
                    } else {
                        setMessage({
                            message: INFO_MESSAGES.saveSchedule(patientData.ScheduleDate),
                            type: 'success',
                            show: true
                        });
                        setShowCharityMessage(true);
                    }
                });
            } else {
                setMessage({
                    message: INFO_MESSAGES.saveSchedule(patientData.ScheduleDate),
                    type: 'success',
                    show: true
                });
            }
        });
    };
    
    const handleClose = (state: boolean) => {
        setShowDatePicker(state);
    };

    const handleFullNameChange = (name: string) => {
        const newData: FormProps = {...patientData};
        newData.FullName = name;
        setPatientData(newData);
    };

    const handlePhoneNumberChange = (phone: string) => {
        const newData: FormProps = {...patientData};
        newData.PhoneNumber = phone;
        setPatientData(newData);
    };

    const handleAgeChange = (age: number) => {
        const newData: FormProps = {...patientData};
        newData.Age = age;
        setPatientData(newData);
    };

    const handleCNPChange = (cnp: string) => {
        const newData: FormProps = {...patientData};
        newData.CNP = cnp;
        setPatientData(newData);
    };

    const handleBloodTypeChange = (bloodType: number) => {
        const newData: FormProps = {...patientData};
        if(bloodType > 0) {
            newData.BloodType = +bloodType;
        } else {
            newData.BloodType = undefined;
        }
        setPatientData(newData);
    };

    const handleMedicalStaffChange = (medicalStaff: number) => {
        const newData: FormProps = {...patientData};
        if(medicalStaff > 0) {
            newData.MedicalStaff = +medicalStaff;
        } else {
            newData.MedicalStaff = undefined;
        }
        setPatientData(newData);
    };

    const handleAddressChange = (address: string) => {
        const newData: FormProps = {...patientData};
        newData.FullAddress = address;
        setPatientData(newData);
    };

    const handleEmergencyFullName = (name: string) => {
        const newData: FormProps = {...patientData};
        newData.EmergencyContactFullName = name;
        setPatientData(newData);
    };

    const handleEmergencyPhoneNumber = (number: string) => {
        const newData: FormProps = {...patientData};
        newData.EmergencyContactPhoneNumber = number;
        setPatientData(newData);
    };

    const handleDateChange = (selectedDate: Date) => {
        const newData: FormProps = {...patientData};
        newData.ScheduleDate.setFullYear(selectedDate.getFullYear());
        newData.ScheduleDate.setMonth(selectedDate.getMonth());
        newData.ScheduleDate.setDate(selectedDate.getDate());

        setPatientData(newData);
    };
    
    const handleTimeChange = (hour: number , min: number) => {
        const newData: FormProps = {...patientData};
        newData.ScheduleDate.setHours(hour, min, 0);
        setPatientData(newData);
    };

    return (
        <section>
            <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16 lg:pb-4">
                <h2 className="text-center text-4xl text-gray-900 dark:text-white">
                    <span className="bg-gradient-to-r from-red-600 to-blue-800 bg-clip-text font-medium tracking-tighter text-transparent"> 
                        <span className="font-medium"> 
                        Schedule Your&nbsp;
                            <span className="font-extrabold"> 
                             Appointment
                            </span>
                        </span>
                    </span>
                </h2>
            </div>
            <div className="mt-16 flex justify-center">
                <form className="w-4/5" onSubmit={(event) => {schedule();event.preventDefault();}} method="post">

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="group relative z-0 mb-6 w-full">
                            <input type="text" name="floating_full_name" onChange={(event) => handleFullNameChange(event.target.value)} id="floating_full_name" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                            <label htmlFor="floating_full_name" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Full name</label>
                        </div>
                        <div className="group relative z-0 mb-6 w-full">
                            <input type="tel" pattern="[0-9]{10}" name="floating_phone" onChange={(event) => handlePhoneNumberChange(event.target.value)} id="floating_phone" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                            <label htmlFor="floating_phone" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Phone number</label>
                        </div>
                    </div>

                    <div className="group relative z-0 mb-6 w-full">
                        <input type="number" inputMode="numeric" pattern="[0-9]+" onChange={(event) => handleAgeChange(+event.target.value)} min="15" max="99" name="floating_age" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                        <label htmlFor="floating_age" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Age</label>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="group relative z-0 mb-6 w-full">
                            <input type="number" inputMode="numeric" pattern="[0-9]{13}" onChange={(event) => handleCNPChange(event.target.value)} name="floating_cnp" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                            <label htmlFor="floating_cnp" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">CNP</label>
                        </div>

                        <div>
                            <div className="group relative z-0 mb-6 w-full">
                                <select id="blood_type" defaultValue="Choose your Blood Type" onChange={(event) => handleBloodTypeChange(+event.target.value)} className="peer block w-full appearance-none border-0 border-b-2 border-gray-200 bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gray-200 focus:outline-none focus:ring-0 dark:border-gray-700 dark:text-gray-400">
                                    <option value={-1}>Choose your Blood Type</option>
                                    <option value={-2}>Don&apos;t know</option>
                                    {fetchedBloodTypes?.map((bloodType: IBloodType) => (<option key={bloodType.id} value={bloodType.id}>{bloodType.bloodType}</option>))}
                                </select>
                                <label htmlFor="blood_type" className="sr-only">Underline select</label>
                            </div>
                        </div>
                    </div>

                    <div className="group relative z-0 mb-6 w-full">
                        <input type="text" name="floating_address" id="floating_address" onChange={(event) => handleAddressChange(event.target.value)} className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                        <label htmlFor="floating_address" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Full Address</label>
                    </div>

                    <div className="grid md:grid-cols-3 md:gap-6">
                        <div className="group relative z-0 mb-6 w-full">
                            <input type="text" name="floating_contact_full_name" id="floating_contact_full_name" onChange={(event) => handleEmergencyFullName(event.target.value)} className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                            <label htmlFor="floating_contact_full_name" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Emergency Contact Full Name</label>
                        </div>
                        <div className="group relative z-0 mb-6 w-full">
                            <input type="tel" pattern="[0-9]{10}" name="floating_contact_phone" id="floating_contact_phone" onChange={(event) => handleEmergencyPhoneNumber(event.target.value)} className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                            <label htmlFor="floating_contact_phone" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Emergency Contact Phone number</label>
                        </div>
                        
                        <div>
                            <div className="group relative z-0 mb-6 w-full">
                                <select id="medical_staff" defaultValue="Choose your Doctor" onChange={(event) => handleMedicalStaffChange(+event.target.value)} className="peer block w-full appearance-none border-0 border-b-2 border-gray-200 bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gray-200 focus:outline-none focus:ring-0 dark:border-gray-700 dark:text-gray-400">
                                    <option value={-1}>Choose your Doctor</option>
                                    {fetchedMedicalStaffs?.map((medicalStaff: IMedicalStaff) => (<option key={medicalStaff.id} value={medicalStaff.id}>Dr. {medicalStaff.name}, Specialization: {medicalStaff.specialization}</option>))}
                                </select>
                                <label htmlFor="medical_staff" className="sr-only">Underline select</label>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2  md:gap-6 ">
                        <div className="group relative z-[1] mb-6 w-full">
                            <Datepicker options={DATE_PICKER_OPTS} onChange={handleDateChange} show={showDatePicker} setShow={handleClose}></Datepicker>
                        </div>
                        <div className=" group relative z-0 mb-6 self-center justify-self-end md:justify-self-start">
                            <TimePicker onChange={handleTimeChange}></TimePicker>
                        </div>
                    </div>

                    <div className='flex justify-center md:justify-start'>
                        {renderInfoMessageComponent()}
                    </div>
                    <button type="submit" className="mt-5 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">Schedule</button>
                </form>
            </div>

            <div className='mt-10'>
                {renderCharityMessageComponent()}
            </div>

        </section>
    );
}

export default Donate;
