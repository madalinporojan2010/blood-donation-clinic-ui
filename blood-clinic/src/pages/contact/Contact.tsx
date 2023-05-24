import { useState } from 'react';
import MessageBox from '../../components/message-box/message-box';
import { INFO_MESSAGES } from './Contact-types';

function Contact() {
    const [showMessage, setShowMessage] = useState<boolean>(false);

    const showMessageComponent = (show: boolean) => {
        if(show) {
            return <MessageBox message={INFO_MESSAGES.MESSAGE_SENT} messageType="success" onClose={() => {
                setShowMessage(false);
            } }></MessageBox>;
        } 
    };

    return (
        <section className=" bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
                <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">Got a technical issue? Want to send feedback about a feature? Need details about our Clinic? Let us know.</p>
                <form className="space-y-8" method="POST" onSubmit={(event) => {setShowMessage(true); event.preventDefault();}}>
                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:shadow-sm dark:placeholder:text-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-500" placeholder="name@yourmail.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:shadow-sm dark:placeholder:text-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-500" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows={6} className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    {showMessageComponent(showMessage)}
                    <button type="submit" className="rounded-lg bg-gray-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-fit">Send message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
