import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useEffect, useLayoutEffect, useState } from 'react';
import useIsMobile from '../../hooks/is-mobile/is-mobile-hook';
import getBloodBanks from '../../shared/services/bloodBank/bloodBank';
import { IBloodBank } from '../../shared/services/bloodBank/bloodBank-types';
import getBloodTypes from '../../shared/services/bloodType/bloodType';
import { IBloodType } from '../../shared/services/bloodType/bloodTypes-types';
import { getPatients, updatePatient } from '../../shared/services/patient/patient';
import { IPatient } from '../../shared/services/patient/patient-types';
import { getSchedules } from '../../shared/services/schedule/schedule';
import { ISchedule } from '../../shared/services/schedule/schedule-types';
import { RESPONSE_MESSAGES } from '../../shared/shared-constants';
import { CELL_PADDING, MOBILE_CELL_PADDING, MOBILE_TABLE_COLUMNS, TABLE_COLUMNS } from './Patients-constants';

export default function Patients() {
    const isMobile = useIsMobile();
    
    const [fetchedPatients, setFetchedPatients] = useState<IPatient[]>();
    const [fetchedSchedules, setFetchedSchedules] = useState<ISchedule[]>();
    const [fetchedBloodTypes, setFetchedBloodTypes] = useState<IBloodType[]>();
    const [fetchedBloodBanks, setFetchedBloodBanks] = useState<IBloodBank[]>();
    
    const [cellPadding, setCellPadding] = useState<string>(CELL_PADDING);

    const fetchPatients = () => {
        getPatients((patients: IPatient[] | null) => {
            if(patients) {
                setFetchedPatients(patients);
            }
        });
    };

    useEffect(() => {
        fetchPatients();
        getSchedules((schedules: ISchedule[] | null) => {
            if(schedules) {
                setFetchedSchedules(schedules);
            }
        });
        getBloodTypes((bloodTypes: IBloodType[] | null) => {
            if(bloodTypes) {
                setFetchedBloodTypes(bloodTypes);
            }
        });
        getBloodBanks((bloodBanks: IBloodBank[] | null) => {
            if(bloodBanks) {
                setFetchedBloodBanks(bloodBanks);
            }
        });
    }, []);
    
    useLayoutEffect(() => {
        if(isMobile) {
            setCellPadding(MOBILE_CELL_PADDING);
        } else {
            setCellPadding(CELL_PADDING);
        }
    }, [isMobile]);

    const tableColumns = () => {
        if(isMobile) {
            return MOBILE_TABLE_COLUMNS.map((column: string) => <th key={column} scope="col" className={`${cellPadding}`}>{column}</th>);
        }

        return TABLE_COLUMNS.map((column: string) => <th key={column} scope="col" className={`${cellPadding}`}>{column}</th>);
    };

    const handleBloodTypeChange = (bloodTypeID: number, patientID: number) => {
        const patient = fetchedPatients?.find((patient: IPatient) => patient.id === patientID);
        if(patient) {
            if(bloodTypeID < 0) {
                patient.bloodType = null;
            } else if(patient.bloodType) {
                patient.bloodType.id = bloodTypeID;
            } else {
                patient.bloodType = {id: bloodTypeID};
            }

            updatePatient(patient, (message: string | null) => {
                if(message !== null && message.includes(RESPONSE_MESSAGES.SUCCESS)) {
                    fetchPatients();
                }
            });
        }
    };

    const tableRows = () => {
        return fetchedPatients?.map((patient: IPatient) => {
            return (
                <tr key={patient.id} className="break-all border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <td className={`hidden ${cellPadding}  md:table-cell`}>
                        {patient.id}
                    </td>
                    <th scope="row" className={`${cellPadding} font-medium text-gray-900 dark:text-white`}>
                        {patient.name}
                    </th>
                    <td className={`${cellPadding}`}>
                        {patient.age}
                    </td>
                    <td className={`hidden ${cellPadding} md:table-cell`}>
                        {patient.address}
                    </td>
                    <td className={`${cellPadding}`}>
                        {patient.phone}
                    </td>
                    <td className={`hidden ${cellPadding} md:table-cell`}>
                        {patient.cnp}
                    </td>
                    <td className={`hidden ${cellPadding} md:table-cell`}>
                        {patient.contactPersonName}
                    </td>
                    <td className={`hidden ${cellPadding} md:table-cell`}>
                        {patient.contactPersonPhone}
                    </td>
                    <th scope="row" className={`${cellPadding} font-medium text-gray-900 dark:text-white`}>
                        <div className="relative flex justify-center gap-3">
                            {patient.bloodType?.bloodType ?? 'Doesn\'t know'}

                            <select id="blood_type" onChange={(event) => handleBloodTypeChange(+event.target.value, patient.id ?? 0)} defaultValue={patient.bloodType?.bloodType} className="peer absolute right-0 z-10 block h-full w-full cursor-pointer appearance-none border-0 border-b-2 border-gray-200 bg-transparent text-sm text-gray-500 opacity-0  focus:border-gray-200 focus:outline-none focus:ring-0 dark:border-gray-700 dark:text-gray-400">
                                <option value={-1}>Doesn&apos;t know</option>
                                {fetchedBloodTypes?.map((bloodType: IBloodType) => <option key={bloodType.id} value={bloodType.id}>{`${bloodType.bloodType} Actual Quantity: ${fetchedBloodBanks?.find((bloodBank: IBloodBank) => bloodBank.bloodType.id === bloodType.id)?.quantity}`}</option>)}
                            </select>

                            <div id="alert-1" className='flex rounded-lg bg-blue-50 text-base font-bold text-blue-800 dark:bg-gray-800 dark:text-blue-400' role="alert">
                                <button type="button" className={'-ml-2 inline-flex h-8 w-8 rounded-lg bg-blue-50 text-blue-800 focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-blue-400'} data-dismiss-target="#alert-1" aria-label="Close">
                                    <span className="sr-only">Close</span>
                                    <ArrowDropDownIcon></ArrowDropDownIcon>
                                </button>
                            </div>
                        </div>
                    </th>
                    <th scope="row" className={`${cellPadding} font-medium text-gray-900 dark:text-white`}>
                        {fetchedSchedules?.find((schedule: ISchedule) => {
                            return schedule.patient.id === patient.id;
                        })?.arrivalTime.toString() ?? 'Unknown'}
                    </th>
                </tr>
            );
        });
    };

    return (
        <section>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                    <caption className="bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white">
            Our patients
                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Browse the list of our clinic future or old patients. Make sure that you update their blood type if it is not set already.
                        </p>
                    </caption>
                    <thead className=" bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {tableColumns()}
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows()}
                    </tbody>
                </table>
            </div>
        </section>
    );
}