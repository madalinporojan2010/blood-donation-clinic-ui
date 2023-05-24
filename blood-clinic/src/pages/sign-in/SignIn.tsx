import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MessageBox from '../../components/message-box/message-box';
import getMedicalStaff from '../../shared/services/medical-staff/medicalStaff';
import { IMedicalStaff } from '../../shared/services/medical-staff/medicalStaff-types';
import { DEFAULT_MESSAGE } from '../../shared/shared-constants';
import { Message } from '../../shared/shared-types';
import { DEFAULT_SIGNIN_DATA, ERROR_MESSAGES, INFO_MESSAGES, PATIENTS_PAGE_PATH } from './SignIn-constants';
import { FormProps } from './SignIn-types';

function SignIn() {
    const [signInData, setSignInData] = useState<FormProps>(DEFAULT_SIGNIN_DATA);
    
    const [fetchedMedicalStaff, setFetchedMedicalStaff] = useState<IMedicalStaff[]>();

    const [message, setMessage] = useState<Message>(DEFAULT_MESSAGE);
    

    const navigate = useNavigate();
    
    useEffect(()=>{
        getMedicalStaff((medicalStaff: IMedicalStaff[] | null) => {
            if(medicalStaff) {
                setFetchedMedicalStaff(medicalStaff);
            } else {
                const newMessage = {...message};
                newMessage.message = ERROR_MESSAGES.FETCH_MEDICAL_DATA;
                newMessage.type = 'error';
                newMessage.show = true;
                setMessage(newMessage);
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

    const checkCredentials = () => {
        if(fetchedMedicalStaff) {
            const access: boolean = fetchedMedicalStaff.find((medicalStaff: IMedicalStaff) => {
                return medicalStaff.cnp === signInData.idNumber && `${medicalStaff.id}${medicalStaff.age}${medicalStaff.cnp}` === signInData.password;
            }) ? true : false;
            
            if(access) {
                navigate(PATIENTS_PAGE_PATH);
            } else {
                const newMessage = {...message};
                newMessage.message = INFO_MESSAGES.SIGN_IN;
                newMessage.type = 'info';
                newMessage.show = true;
                setMessage(newMessage);
            }
        } else {
            const newMessage = {...message};
            newMessage.message = ERROR_MESSAGES.SIGN_IN;
            newMessage.type = 'error';
            newMessage.show = true;
            setMessage(newMessage);
        }
    };

    const handleIDNumberChange = (idNumber: string) => {
        const newData: FormProps = {...signInData};
        newData.idNumber = idNumber;
        setSignInData(newData);
    };

    const handlePasswordChange = (password: string) => {
        const newData: FormProps = {...signInData};
        newData.password = password;
        setSignInData(newData);
    };

    return (
        <div className="mx-auto mt-12 w-full max-w-xs rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:max-w-sm md:p-8 lg:max-w-md">
            <form className="space-y-6" method="POST" onSubmit={(event) => {checkCredentials();event.preventDefault();}}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in</h5>
                <div>
                    <label htmlFor="idNumber" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your ID number</label>
                    <input type="text" onChange={(event) => {handleIDNumberChange(event.target.value);}} name="idNumber" id="idNumber" pattern="\d*" maxLength={13}  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400" placeholder="xxxxxxxxxxxxx" required />
                </div>
                <div>
                    <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" onChange={(event) => {handlePasswordChange(event.target.value);}} name="password" id="password" maxLength={40} placeholder="••••••••" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400" required />
                </div>
                <button type="submit" className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                
            </form>
            <div className='mt-10'>
                {renderInfoMessageComponent()}
            </div>
        </div>

    );
}

export default SignIn;
