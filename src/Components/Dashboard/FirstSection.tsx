import { Avatar } from '@mui/material';
import { deepOrange, pink } from '@mui/material/colors';
import { FolderKanban, NewspaperIcon } from 'lucide-react';
import { useState } from 'react';

const FirstSection = () => {
    const [showAnimate, setshowAnimate] = useState(true);

    return (
        <>
            <main className= " w-full">
                {/* Top search bar */}
                <div
                    className={
                        'top_bar bg-[#1c1c1c] p-4 rounded-2xl shadow-2xl ' +
                        (showAnimate ? 'animate-bounce' : '')
                    }
                >
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search something here..."
                        className="text-white border-none w-full focus:outline-none bg-transparent placeholder-gray-400"
                        onFocus={() => setshowAnimate(false)}
                        onBlur={() => setshowAnimate(true)}
                    />
                </div>

                {/* News & Report grid */}
                <div className="new_and_report grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">

                    {/* Left: News */}
                    <section className="bg-[#0000005f] rounded-xl p-6 text-white shadow-lg">
                        <h2 className="text-2xl font-bold flex mb-3 justify-start items-center gap-3 "><Avatar style={{ backgroundColor: pink[500] }}>
                            <NewspaperIcon />
                        </Avatar> News</h2>

                        <div className='mb-6'>
                            <h3 className="text-lg font-semibold underline">React 19 Released</h3>
                            <p className="text-base text-gray-300 leading-relaxed indent-6">
                                <span className="text-white font-semibold">React 19</span> brings
                                <span className="text-green-400 font-medium"> major performance improvements</span> and introduces
                                <span className="text-blue-400 font-medium"> built-in support for Server Components</span>,
                                allowing developers to build more scalable, maintainable apps with minimal boilerplate.
                                It also streamlines rendering and provides enhanced server-side interactivity.
                            </p>
                        </div>

                        <div className='mb-6'>
                            <h3 className="text-lg font-semibold underline">JavaScript Trends 2025</h3>
                            <p className="text-base text-gray-300 leading-relaxed indent-6">
                                From <span className="text-purple-400 font-medium">isomorphic apps</span> to
                                <span className="text-yellow-400 font-medium"> edge function integration</span>,
                                the JavaScript ecosystem is growing rapidly. Frameworks like
                                <span className="text-pink-400 font-medium"> SolidJS</span> and tools like
                                <span className="text-orange-400 font-medium"> Bun</span> are redefining developer expectations.
                            </p>
                        </div>

                    </section>

                    {/* Right: Report */}
                    <section className="bg-[#0000005f] rounded-xl text-white p-6 shadow-lg">
                        <h2 className="text-2xl font-bold flex mb-3 justify-start items-center gap-3"><Avatar style={{ backgroundColor: deepOrange[500] }}><FolderKanban /></Avatar> Reports</h2>

                        <div className='mb-6'>
                            <h3 className="text-lg font-semibold underline">Weekly Code Insights</h3>
                            <p className="text-base text-gray-300 leading-relaxed indent-6">
                                Your coding activity saw a
                                <span className="text-green-400 font-medium"> 24% increase</span> this week.
                                Most of your time was spent on
                                <span className="text-cyan-400 font-medium"> React components</span> and
                                <span className="text-blue-400 font-medium"> API integrations</span>.
                                Keep maintaining your commit streak!
                            </p>
                        </div>

                        <div className='mb-6'>
                            <h3 className="text-lg font-semibold underline">Most Used Tags</h3>
                            <p className="text-base text-gray-300 leading-relaxed indent-6">
                                Based on recent posts, you’ve used
                                <span className="text-yellow-400 font-medium"> JavaScript</span>,
                                <span className="text-blue-400 font-medium"> TypeScript</span>, and
                                <span className="text-purple-400 font-medium"> Next.js</span> the most.
                                Consider exploring
                                <span className="text-pink-400 font-medium"> Svelte</span> or
                                <span className="text-orange-400 font-medium"> Astro</span> to broaden your skillset.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default FirstSection;
