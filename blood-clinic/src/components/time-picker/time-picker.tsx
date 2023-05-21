import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useEffect, useState } from 'react';
import { DEFAULT_HOUR_PICKS, DEFAULT_MIN_PICKS } from './time-picker-constants';
import { Props } from './time-picker-types';


function TimePicker({onChange}: Props) {
    const [hour, setHour] = useState<number>(9);
    const [min, setMin] = useState<number>(0);


    useEffect(() => {
        onChange?.(hour, min);
    }, [hour, min]);

    return (
        <section>
            <div className="h-full rounded-lg border border-gray-600 p-1 shadow-xl dark:bg-gray-700 dark:text-gray-50 md:p-2">
                
                <div className="flex gap-2">
                    <AccessTimeIcon></AccessTimeIcon>
                    <div className="flex h-full items-center justify-center ">
                        <select name="hours" onChange={(event) => setHour(+event.target.value)} className="appearance-none bg-transparent font-medium outline-none">
                            {DEFAULT_HOUR_PICKS.map((val: number) => <option key={val} value={val} className="dark:text-gray-700">{val}</option>)}
                        </select>
                        <span className="mx-2 font-medium">:</span>
                        <select name="minutes" onChange={(event) => setMin(+event.target.value)} className="appearance-none bg-transparent font-medium outline-none">
                            {Array.from(DEFAULT_MIN_PICKS).map(([key, value]) => <option key={key} value={key} className="dark:text-gray-700">{value}</option>)}
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default TimePicker;