
import { useState } from 'react';
import Datepicker from 'tailwind-datepicker-react';
import TimePicker from '../../components/time-picker/time-picker';
import { BLOOD_TYPES, DATE_PICKER_OPTS } from './Donate-constants';

function Donate() {

    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');
    const [show, setShow] = useState<boolean>(false);
    const handleChange = (selectedDate: Date) => {
        // eslint-disable-next-line no-console
        console.log(selectedDate);
    };
    const handleClose = (state: boolean) => {
        setShow(state);
    };
    return (
        <section>
            <span className="mt-10 flex items-center justify-center text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                
            </span>
            <div className="mt-20 flex justify-center">
                <form className="w-4/5">

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="group relative z-0 mb-6 w-full">
                            <input type="text" name="floating_full_name" id="floating_full_name" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                            <label htmlFor="floating_full_name" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Full name</label>
                        </div>
                        <div className="group relative z-0 mb-6 w-full">
                            <input type="tel" pattern="[0-9]{10}" name="floating_phone" id="floating_phone" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                            <label htmlFor="floating_phone" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Phone number</label>
                        </div>
                    </div>

                    <div className="group relative z-0 mb-6 w-full">
                        <input type="email" name="floating_email" id="floating_email" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                        <label htmlFor="floating_email" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Email address</label>
                    </div>

                    <div className="group relative z-0 mb-6 w-full">
                        <input type="number" inputMode="numeric" pattern="[0-9]+" min="15" max="99" name="floating_age" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                        <label htmlFor="floating_age" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Age</label>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="group relative z-0 mb-6 w-full">
                            <input type="number" inputMode="numeric" pattern="[0-9]{13}" name="floating_cnp" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                            <label htmlFor="floating_cnp" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">CNP</label>
                        </div>

                        <div>
                            <div className="group relative z-0 mb-6 w-full">
                                <select id="blood_type" defaultValue="Choose your Blood Type" className="peer block w-full appearance-none border-0 border-b-2 border-gray-200 bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gray-200 focus:outline-none focus:ring-0 dark:border-gray-700 dark:text-gray-400">
                                    <option>Choose your Blood Type</option>
                                    <option>Don&apos;t know</option>
                                    {BLOOD_TYPES.map((type: string) => (<option key={type}>{type}</option>))}
                                </select>
                                <label htmlFor="blood_type" className="sr-only">Underline select</label>
                            </div>
                        </div>
                    </div>

                    <div className="group relative z-0 mb-6 w-full">
                        <input type="text" name="floating_address" id="floating_address" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                        <label htmlFor="floating_address" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Full Address</label>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="group relative z-0 mb-6 w-full">
                            <input type="text" name="floating_contact_full_name" id="floating_contact_full_name" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                            <label htmlFor="floating_contact_full_name" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Contact Person Full Name</label>
                        </div>
                        <div className="group relative z-0 mb-6 w-full">
                            <input type="tel" pattern="[0-9]{10}" name="floating_contact_phone" id="floating_contact_phone" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
                            <label htmlFor="floating_contact_phone" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Contact Person Phone number</label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="group relative z-0 mb-6 w-full">
                            <Datepicker options={DATE_PICKER_OPTS} onChange={handleChange} show={show} setShow={handleClose}></Datepicker>
                        </div>
                        <div className="group relative z-0 mb-6 w-full">
                            <TimePicker></TimePicker>
                        </div>
                    </div>
                    <button type="submit" className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">Submit</button>


                </form>
            </div>
        </section>
    );
}

export default Donate;
