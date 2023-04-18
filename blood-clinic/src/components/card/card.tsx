import { CardProps } from './card-types';

function Card(props: CardProps) {
    return (
        <div>
            <div className="mx-auto mb-8 max-w-md rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 md:max-w-sm">
                <a href={encodeURI(props.href)}>
                    <img className="rounded-t-lg dark:text-white" src={props.imageSource} alt="Card Image" />
                </a>
                <div className="p-5">
                    <a href={encodeURI(props.href)}>
                        <h5 className="mb-2 text-2xl font-bold capitalize tracking-tight text-gray-900 dark:text-white">
                            {props.title}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {props.text}
                    </p>
                    <a href={encodeURI(props.href)} className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                        <svg aria-hidden="true" className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    );  
}

export default Card;