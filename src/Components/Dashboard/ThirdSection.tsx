import { motion } from 'framer-motion';
import { useState } from 'react';

const ThirdSection = () => {
    const [showAnimate, setShowAnimate] = useState(true);
    const [suggestions] = useState([
        "What’s new in React 19?",
        "Explain Next.js 14 updates",
        "Tailwind CSS 4 features",
        "Server Components overview",
        "Best practices for performance"
    ]);

    return (
        <main className="w-full space-y-6">
            {/* Search Bar */}
            <div
                className={`bg-[#1c1c1c] px-4 py-3 md:p-4 rounded-2xl shadow-2xl w-full flex items-center gap-3 transition-all duration-300 ${
                    showAnimate ? 'animate-bounce' : ''
                }`}
            >
                <input
                    type="text"
                    name="search"
                    placeholder="Ask AI about React, Next.js, Tailwind..."
                    className="text-white border-none w-full focus:outline-none bg-transparent placeholder-gray-400 text-sm md:text-base"
                    onFocus={() => setShowAnimate(false)}
                    onBlur={() => setShowAnimate(true)}
                />
            </div>

            {/* Quick Suggestions */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {suggestions.map((s, i) => (
                    <button
                        key={i}
                        className="bg-[#2a2a2a] hover:bg-[#333] cursor-pointer text-gray-200 text-sm px-3 py-1.5 rounded-full whitespace-nowrap transition"
                    >
                        {s}
                    </button>
                ))}
            </div>

            {/* Language Badges
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                <LanguageBadges />
            </div> */}

            {/* AI Explanation Results */}
            <section className="space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0000005f] p-4 rounded-xl shadow-lg"
                >
                    <h3 className="text-lg font-semibold text-white">React 19 Released</h3>
                    <p className="text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
                        <span className="text-white font-semibold">React 19</span> brings
                        <span className="text-green-400 font-medium"> major performance improvements</span> and introduces
                        <span className="text-blue-400 font-medium"> built-in support for Server Components</span>, allowing developers to build more scalable, maintainable apps.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0000005f] p-4 rounded-xl shadow-lg"
                >
                    <h3 className="text-lg font-semibold text-white">Next.js 14 Announced</h3>
                    <p className="text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
                        <span className="text-white font-semibold">Next.js 14</span> now features
                        <span className="text-pink-400 font-medium"> enhanced routing features</span> and
                        <span className="text-yellow-400 font-medium"> streaming support</span> for better UX on dynamic pages.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0000005f] p-4 rounded-xl shadow-lg"
                >
                    <h3 className="text-lg font-semibold text-white">Tailwind CSS 4 Beta</h3>
                    <p className="text-gray-300 mt-2 text-sm md:text-base leading-relaxed">
                        <span className="text-white font-semibold">Tailwind 4</span> includes
                        <span className="text-purple-400 font-medium"> smarter class detection</span> and
                        <span className="text-blue-300 font-medium"> extended dark mode utilities</span> for modern UIs.
                    </p>
                </motion.div>
            </section>

            {/* Scrollbar hide style */}
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </main>
    );
};

export default ThirdSection;
