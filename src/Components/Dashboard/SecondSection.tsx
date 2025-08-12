import { useState } from 'react';
import LanguageBadges from '../Utils/LanguageBadges';

const SecondSection = () => {
    const [showAnimate, setshowAnimate] = useState(true);

    return (
        <main className="w-full">
            {/* Top Search Bar */}
            <div
                className={`bg-[#1c1c1c] p-3 md:p-4 rounded-2xl shadow-2xl w-full transition-all duration-300 ${
                    showAnimate ? 'animate-bounce' : ''
                }`}
            >
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search some keyword here..."
                    className="text-white border-none w-full focus:outline-none bg-transparent placeholder-gray-400 text-sm md:text-base"
                    onFocus={() => setshowAnimate(false)}
                    onBlur={() => setshowAnimate(true)}
                />
            </div>

            {/* Language Badges */}
            <div className="flex flex-wrap gap-2 mt-4 max-w-full overflow-x-auto">
                <LanguageBadges />
            </div>

            {/* News / Reports */}
            <div className="mt-10">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#0000005f] p-4 rounded-xl shadow-lg">
                        <h3 className="text-lg font-semibold underline text-white">React 19 Released</h3>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed indent-6 mt-2">
                            <span className="text-white font-semibold">React 19</span> brings
                            <span className="text-green-400 font-medium"> major performance improvements</span> and introduces
                            <span className="text-blue-400 font-medium"> built-in support for Server Components</span>, allowing developers to build more scalable, maintainable apps.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#0000005f] p-4 rounded-xl shadow-lg">
                        <h3 className="text-lg font-semibold underline text-white">Next.js 14 Announced</h3>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed indent-6 mt-2">
                            <span className="text-white font-semibold">Next.js 14</span> now features
                            <span className="text-pink-400 font-medium"> enhanced routing features</span> and
                            <span className="text-yellow-400 font-medium"> streaming support</span> for better UX on dynamic pages.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0000005f] p-4 rounded-xl shadow-lg">
                        <h3 className="text-lg font-semibold underline text-white">Tailwind CSS 4 Beta</h3>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed indent-6 mt-2">
                            <span className="text-white font-semibold">Tailwind 4</span> includes
                            <span className="text-purple-400 font-medium"> smarter class detection</span> and
                            <span className="text-blue-300 font-medium"> extended dark mode utilities</span> for modern UIs.
                        </p>
                    </div>

                    {/* Add more cards here if needed */}
                </section>
            </div>
        </main>
    );
};

export default SecondSection;
