import { DEFAULT_HOUR_PICKS, DEFAULT_MIN_PICKS } from './time-picker-constants';



function TimePicker() {
    return (
        <div className="h-full w-20 rounded-lg border border-gray-600 p-1 shadow-xl dark:bg-gray-700 dark:text-gray-50">
            <div className="flex h-full items-center justify-center ">
                <select name="hours" className="appearance-none bg-transparent font-medium outline-none">
                    {DEFAULT_HOUR_PICKS.map((val: number) => <option key={val} value={val} className="dark:text-gray-700">{val}</option>)}
                </select>
                <span className="mx-2 font-medium">:</span>
                <select name="minutes" className="appearance-none  bg-transparent font-medium outline-none">
                    {Array.from(DEFAULT_MIN_PICKS).map(([key, value]) => <option key={key} value={key} className="dark:text-gray-700">{value}</option>)}
                </select>
            </div>
        </div>
    );
}
export default TimePicker;