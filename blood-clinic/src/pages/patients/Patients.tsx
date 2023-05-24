import { useEffect, useState } from 'react';
import { getPatients } from '../../shared/services/patient/patient';
import { IPatient } from '../../shared/services/patient/patient-types';

export default function Patients() {
    const [fetchedPatients, setFetchedPatients] = useState<IPatient[]>();

    useEffect(() => {
        getPatients((patients: IPatient[] | null) => {
            if(patients) {
                setFetchedPatients(patients);
            }
        });
    }, []);

    return (
        <section>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                    <caption className="bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white">
            Our products
                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                    </caption>
                    <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                    Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                    Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                    Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                    Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17
                            </th>
                            <td className="px-6 py-4">
                    Silver
                            </td>
                            <td className="px-6 py-4">
                    Laptop
                            </td>
                            <td className="px-6 py-4">
                    $2999
                            </td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Edit</a>
                            </td>
                        </tr>
                        <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                    White
                            </td>
                            <td className="px-6 py-4">
                    Laptop PC
                            </td>
                            <td className="px-6 py-4">
                    $1999
                            </td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                    Black
                            </td>
                            <td className="px-6 py-4">
                    Accessories
                            </td>
                            <td className="px-6 py-4">
                    $99
                            </td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}