import { useEffect, useState } from 'react';
import LanguageBadges from '../Utils/LanguageBadges';
import { ASK_TO_AI } from '@/APIs/gemini';

const colorMap: Record<string, string> = {
    blue: "text-blue-400 font-medium",
    green: "text-green-400 font-medium",
    orange: "text-orange-400 font-medium",
    purple: "text-purple-400 font-medium",
    red: "text-red-400 font-medium",
    yellow: "text-yellow-400 font-medium",
    pink: "text-pink-400 font-medium",
    null: "text-gray-300"
};
const boldColorMap: Record<string, string> = {
    blue: "text-blue-300 font-bold",     // darker/lighter adjustment
    green: "text-green-300 font-bold",
    orange: "text-orange-300 font-bold",
    purple: "text-purple-300 font-bold",
    red: "text-red-300 font-bold",
    yellow: "text-yellow-300 font-bold",
    pink: "text-pink-300 font-bold",
    null: "text-gray-200 font-bold"
};
const demoCards = [
    {
        title: "Welcome to Snippetix",
        content: [
            { text: "Type a keyword above ", color: null },
            { text: "to see AI-powered insights!", color: "green" }
        ]
    },
    {
        title: "Tip",
        content: [
            { text: "You can search ", color: null },
            { text: "anything", color: "yellow" },
            { text: " — from programming to history.", color: null }
        ]
    }
];


const SecondSection = () => {
    const [showAnimate, setshowAnimate] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [cards, setCards] = useState<
        { title: string; content: { text: string; color: string | null }[] }[]
    >(demoCards);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchTerm.trim());
        }, 500);
        return () => clearTimeout(handler);
    }, [searchTerm]);

    useEffect(() => {
        const fetchAIData = async () => {
            if (!debouncedSearch) return;
            const data = await ASK_TO_AI({ question: debouncedSearch });
            setCards(data);
        };
        fetchAIData();
    }, [debouncedSearch]);

    return (
        <main className="w-full">
            {/* Top Search Bar */}
            <div
                className={`bg-[#1c1c1c] p-3 md:p-4 rounded-2xl shadow-2xl w-full transition-all duration-300 ${showAnimate ? 'animate-bounce' : ''
                    }`}
            >
                <input
                    type="text"
                    placeholder="Search some keyword here..."
                    className="text-white border-none w-full focus:outline-none bg-transparent placeholder-gray-400 text-sm md:text-base"
                    onFocus={() => setshowAnimate(false)}
                    onBlur={() => setshowAnimate(true)}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Language Badges */}
            <div className="flex flex-wrap gap-2 mt-4 max-w-full overflow-x-auto">
                <LanguageBadges />
            </div>

            {/* Cards */}
            <div className="mt-10">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cards.slice(0, 2).map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-700 hover:shadow-2xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-bold text-white underline decoration-blue-400">
                                {card.title}
                            </h3>

                            <ul className="list-disc list-inside mt-4 space-y-2 text-base text-gray-300">
                                {card.content.map((part, i) => {
                                    const formattedText = part.text.split(/(\*\*.*?\*\*)/g).map((segment, idx) => {
                                        if (/^\*\*(.*)\*\*$/.test(segment)) {
                                            return (
                                                <strong
                                                    key={idx}
                                                    className={part.color ? boldColorMap[part.color] : boldColorMap.null}
                                                >
                                                    {segment.replace(/\*\*/g, '')}
                                                </strong>
                                            );
                                        }
                                        return segment;
                                    });
                                    

                                    return (
                                        <li
                                            key={i}
                                            className={part.color ? colorMap[part.color] : "text-gray-300"}
                                        >
                                            {formattedText}
                                        </li>
                                    );
                                })}


                            </ul>
                        </div>
                    ))}
                </section>
            </div>



        </main>
    );
};

export default SecondSection;
