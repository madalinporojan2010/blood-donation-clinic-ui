import { ReactComponent as DropSVG } from '../../assets/icons/drop-icon.svg';
import Card from '../../components/card/card';
import { CardProps } from '../../components/card/card-types';
import { CARDS } from './Home-constants';

function Home() {
    function renderCards(cards: CardProps[]) {
        return cards.map(card => <Card key={card.title} imageSource={card.imageSource} title={card.title} text={card.text} href={card.href} />);
    }

    return (
        <section>
            <section className="h-full bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
                    <h2 className="mb-4 text-center text-4xl text-gray-900 dark:text-white">
                        <span className="bg-gradient-to-r from-red-600 to-blue-800 bg-clip-text font-medium tracking-tighter text-transparent"> 
                        donate&nbsp;
                            <span className="font-extrabold"> 
                        blood
                            </span>
                        </span>
                    </h2>
                    <figure className="mx-auto max-w-screen-md text-center">
                        <svg aria-hidden="true" className="h-10 w-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                        <blockquote>
                            <p className="mb-8 text-left font-light italic text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-8">
                        &quot;Somewhere along the way, we must learn that there is nothing greater than to do something for others.&quot;
                            </p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center justify-start space-x-3">
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Martin Luther King Jr</cite>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <div className='px-10 md:flex md:flex-row md:justify-center md:gap-7'>
                {renderCards(CARDS)}
            </div>

            <div className="w-full border-0 border-gray-200 bg-white p-4 text-center shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8">
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Want to contribute to millions of lives?</h5>
                <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">Make an appointment anytime, any day of the week.<br/> By participating to our programme, you can also donate to any charity with just a click!</p>
                <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                    <a href="donate" className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto">
                        <DropSVG className="mr-3 h-8 [&>.cls-1]:fill-red-700 [&>.cls-1]:dark:fill-[url(#gradient1)]"></DropSVG>
                        <div className="text-left">
                            <div className="mb-1 text-xs">Make an appointment</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">Click for more info</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
