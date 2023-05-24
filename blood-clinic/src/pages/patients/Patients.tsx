import { useEffect, useLayoutEffect, useState } from 'react';
import useIsMobile from '../../hooks/is-mobile/is-mobile-hook';
import { getPatients } from '../../shared/services/patient/patient';
import { IPatient } from '../../shared/services/patient/patient-types';
import { getSchedules } from '../../shared/services/schedule/schedule';
import { ISchedule } from '../../shared/services/schedule/schedule-types';
import { CELL_PADDING, MOBILE_CELL_PADDING, MOBILE_TABLE_COLUMNS, TABLE_COLUMNS } from './Patients-constants';

export default function Patients() {
    const isMobile = useIsMobile();
    
    const [fetchedPatients, setFetchedPatients] = useState<IPatient[]>();
    const [fetchedSchedules, setFetchedSchedules] = useState<ISchedule[]>();
    
    const [cellPadding, setCellPadding] = useState<string>(CELL_PADDING);

    useEffect(() => {
        getPatients((patients: IPatient[] | null) => {
            if(patients) {
                setFetchedPatients(patients);
            }
        });
        getSchedules((schedules: ISchedule[] | null) => {
            if(schedules) {
                setFetchedSchedules(schedules);
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
                        {patient.bloodType?.bloodType ?? 'Doesn\'t know'}
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