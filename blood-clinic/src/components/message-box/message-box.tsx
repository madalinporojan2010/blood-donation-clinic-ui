import { useEffect, useState } from 'react';
import { ERROR_COLORS, INFO_COLORS, SUCCESS_COLORS } from './message-box-constants';
import { MessageBoxColors, MessageBoxProps, MessageType } from './message-box-types';

export default function MessageBox(props: MessageBoxProps) {

    const getSVGIcon = (type: MessageType) => {
        if(type === 'info') {
            return <svg aria-hidden="true" className="mr-3 inline h-7 w-7 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>;
        } else if (type === 'error') {
            return <svg aria-hidden="true" className="mr-3 inline h-7 w-7 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>;
        } else {
            return <svg aria-hidden="true" className="mr-3 inline h-7 w-7 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>;
        }
    };

    const [colors, setColors] = useState<MessageBoxColors>(INFO_COLORS);
    const setCurrentColors = (type: MessageType) => {
        if(type === 'info') {
            setColors(INFO_COLORS);
        } else if (type ==='error') {
            setColors(ERROR_COLORS);
        } else {
            setColors(SUCCESS_COLORS);
        }
    };

    useEffect(() => {
        setCurrentColors(props.messageType);        
    }, []);

    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log(colors);
        
    }, [colors]);

    return (
        <section>
            <div id="alert-1" className={`mb-4 flex rounded-lg border ${colors.border_normal} ${colors.bg_normal} p-4 text-base font-bold ${colors.text_normal} ${colors.border_dark} dark:bg-gray-800 ${colors.text_dark}`} role="alert">
                {getSVGIcon(props.messageType)}
                <span className="sr-only">Info</span>
                <div>
                    {props.message}
                </div>
                <button type="button" className={`-m-1 ml-auto inline-flex h-8 w-8 rounded-lg ${colors.bg_normal} p-1.5 ${colors.button_text_normal} ${colors.button_hover_normal} focus:ring-2 ${colors.button_focus_normal} dark:bg-gray-800 ${colors.button_text_dark} dark:hover:bg-gray-700`} data-dismiss-target="#alert-1" aria-label="Close" onClick={() => {props.onClose();}}>
                    <span className="sr-only">Close</span>
                    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
        </section>
    );
}