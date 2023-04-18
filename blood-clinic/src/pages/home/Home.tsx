import Card from '../../components/card/card';
import { CardProps } from '../../components/card/card-types';
import { CARDS } from './Home-constants';

function Home() {
    function renderCards(cards: CardProps[]) {
        return cards.map(card => <Card key={card.title} imageSource={card.imageSource} title={card.title} text={card.text} href={card.href} />);
    }

    return (
        <div>
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
        </div>
    );
}

export default Home;
