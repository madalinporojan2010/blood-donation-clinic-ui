import { useEffect, useState } from 'react';
import { ReactComponent as DollarSVG } from '../../assets/icons/dollar-icon.svg';
import { DEFAULT_MESSAGE, RESPONSE_MESSAGES } from '../../shared/shared-constants';
import { Message } from '../../shared/shared-types';
import MessageBox from '../message-box/message-box';
import { DEFAULT_DONATION, DEFAULT_DONATION_DATA, ERROR_MESSAGES, INFO_MESSAGES } from './charity-message-constants';
import { FormProps } from './charity-message-types';
import { getDonations, updateDonation } from './services/donation';
import { IDonation } from './services/donation-types';


export default function CharityMessage() {
    const [donationData, setDonationData] = useState<FormProps>(DEFAULT_DONATION_DATA);

    const [fetchedDonations, setFetchedDonations] = useState<IDonation[]>();

    const [message, setMessage] = useState<Message>(DEFAULT_MESSAGE);

    useEffect(() => {
        fetchDonations();
    }, []);


    const fetchDonations = () => getDonations((donations: IDonation[] | null) => {
        if(donations) {
            setFetchedDonations(donations);
        } else {
            const newMessage = {...message};
            newMessage.message = ERROR_MESSAGES.FETCH_MEDICAL_DATA;
            newMessage.type = 'error';
            newMessage.show = true;
            setMessage(newMessage);
        }
    }); 
    

    const donate = () => {
        if(fetchedDonations) {
            const newDonation: IDonation = fetchedDonations.find((donation: IDonation) => {
                return donation.id == donationData.causeID;
            }) ?? DEFAULT_DONATION;

            newDonation.raisedAmmount += donationData.raisedAmmount*100;
            
            updateDonation(newDonation, (response: string | null) => {
                if(response !== null && response === RESPONSE_MESSAGES.SUCCESS) {
                    const newMessage = {...message};
                    newMessage.message = INFO_MESSAGES.SUCCESS;
                    newMessage.type = 'success';
                    newMessage.show = true;
                    setMessage(newMessage);

                    fetchDonations();
                } else {
                    const newMessage = {...message};
                    newMessage.message = ERROR_MESSAGES.UPDATE_DONATION_DATA;
                    newMessage.type = 'error';
                    newMessage.show = true;
                    setMessage(newMessage);
                }
            });
        }
    };

    const isSubmitDisabled = (): boolean => {
        return donationData.causeID <= 0 || donationData.raisedAmmount <= 0;
    };

    const handleDonationCauseChange = (donationID: number) => {
        if(donationID > 0) {
            const newDonation = {...donationData};
            newDonation.causeID = donationID;
            setDonationData(newDonation);
        } else {
            const newMessage = {...message};
            newMessage.message = INFO_MESSAGES.SELECT_CAUSE;
            newMessage.type = 'info';
            newMessage.show = true;
            setMessage(newMessage);
        }
    };

    const handleDonationAmmountChange = (ammount: number) => {
        if(ammount > 0) {
            const newDonation = {...donationData};
            newDonation.raisedAmmount = ammount;
            setDonationData(newDonation);
        } else {
            const newMessage = {...message};
            newMessage.message = INFO_MESSAGES.VALID_AMMOUNT;
            newMessage.type = 'info';
            newMessage.show = true;
            setMessage(newMessage);
        }
    };

    const closeMessage = () => {
        const newMessage = {...message};
        newMessage.show = false;
        setMessage(newMessage);
    };

    
    const renderInfoMessageComponent = () => {
        if(message.show) {
            return <MessageBox message={message.message} messageType={message.type} onClose={() => {closeMessage();}}></MessageBox>;
        }
    };
    

    return (
        <section>
            <div className="w-full border-0 border-gray-200 bg-white p-4 text-center shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8">
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">We believe everyone has the right to a better future.</h5>
                <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">We are supporting hundreds of charities that help people achieve financial stability, social inclusion and independence. You can make a change and help others.<br/> Choose your cause and support it with any ammount.</p>
                <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                    <form onSubmit={(event) => {donate(); event.preventDefault();}} method="POST">
                        <div className="grid md:grid-cols-3  md:gap-6 ">
                            <div>
                                <div className="group relative z-0 mb-6 w-full">
                                    <select id="blood_type" defaultValue="Choose your Blood Type" onChange={(event) => handleDonationCauseChange(+event.target.value)} className="peer block w-full appearance-none border-0 border-b-2 border-gray-200 bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gray-200 focus:outline-none focus:ring-0 dark:border-gray-700 dark:text-gray-400">
                                        <option value={-1}>Choose your Cause</option>
                                        {fetchedDonations?.map((donation: IDonation) => (<option key={donation.id} value={donation.id}>{`${donation.cause} Managed by: ${donation.medicalStaff.name}`}</option>))}
                                    </select>
                                    <label htmlFor="blood_type" className="sr-only">Underline select</label>
                                </div>
                            </div>
                            <div className="group relative z-0 mb-6 w-full">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <DollarSVG className="mb-2"></DollarSVG>
                                </div>
                                <input type="number" name="floating_ammount" id="floating_ammount" className=" peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 pl-10 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required onChange={(event) => {handleDonationAmmountChange(+event.target.value);}} />
                                <label htmlFor="floating_ammount" className="absolute left-10 top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Ammount</label>
                            </div>
                            <div className="group relative z-0 mb-6 w-full">
                                <button disabled={isSubmitDisabled()}  type="submit" className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 disabled:text-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto">
                                    <div className="text-left">
                                        <div className="font-sans text-lg font-semibold">Donate</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='flex justify-center'>
                    {renderInfoMessageComponent()}
                </div>
            </div>
        </section>
    );
}