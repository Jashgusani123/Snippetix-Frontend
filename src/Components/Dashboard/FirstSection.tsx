import { getReports } from '@/APIs/GetAPI';
import { Avatar } from '@mui/material';
import { deepOrange, pink } from '@mui/material/colors';
import { FolderKanban, NewspaperIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

type Report = {
    type: string;
    title: string;
    description: string;
    coverImage: string | null;
};

const FirstSection = () => {
    const [showAnimate, setshowAnimate] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [reports, setReports] = useState<Report[]>([]);
    const [visibleCount, setVisibleCount] = useState(5);
    const [page, setPage] = useState(1);

    const defaultNews = [
        {
            title: "JavaScript Tops Popularity Charts Again",
            description:
                "JavaScript continues to dominate developer surveys, with frameworks like React and Vue leading the way.",
            coverImage: "https://dhtmlx.com/blog/wp-content/uploads/2023/12/image14.png"
        },
        {
            title: "Python Overtakes Java in Enterprise Adoption",
            description:
                "Python's simplicity and ecosystem make it a favorite for machine learning, automation, and web development.",
            coverImage: "https://d2i2xyh28mr8fx.cloudfront.net/wp-content/uploads/2023/05/25123520/Java-vs-Python-Popularity-Index.png"
        },
    ];
    const defaultReports = [
        {
            title: "AI in 2025: Trends & Predictions",
            description:
                "An in-depth analysis of upcoming AI advancements, their applications in industries, and potential challenges in ethics and regulation.",
            coverImage:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQu8pFmJTF3i3qK3547Ag3TNyYWoLvS1AEdQ&s",
        },
        {
            title: "Cybersecurity Threats You Need to Know",
            description:
                "A detailed report on the latest cybersecurity risks, including ransomware, phishing, and deepfake attacks, and how to protect your data.",
            coverImage:
                "https://d2ds8yldqp7gxv.cloudfront.net/Blog+Explanatory+Images/Top+Cybersecurity+Threats+1.webp",
        },
        {
            title: "Web Development Frameworks in 2025",
            description:
                "Comparing the most popular web frameworks like Next.js, SvelteKit, and Remix, with insights into performance, scalability, and community support.",
            coverImage:
                "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop",
        },
        {
            title: "The Future of Cloud Computing",
            description:
                "How edge computing, hybrid cloud, and AI-driven optimization are shaping the next era of cloud-based infrastructure.",
            coverImage:
                "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1600&auto=format&fit=crop",
        },
    ];

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchTerm.trim());
        }, 500);
        return () => clearTimeout(handler);
    }, [searchTerm]);

    useEffect(() => {
        const fetchReports = async () => {
            if (!debouncedSearch) return;
            const data = await getReports({ lan: debouncedSearch, page });
            setReports((prev) => (page === 1 ? data : [...prev, ...data]));
        };
        fetchReports();
    }, [debouncedSearch, page]);


    const handleLoadMore = () => {
        setPage(prev => prev + 1);
    };

    const isSearching = Boolean(debouncedSearch);

    return (
        <main className="w-full">
            {/* Search bar */}
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
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setPage(1); // reset to first page when searching new term
                    }}
                />
            </div>

            {/* News & Report grid */}
            <div
                className={`new_and_report grid gap-3 mt-10 ${isSearching ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
                    }`}
            >
                {/* News */}
                {!isSearching && (
                    <section className="bg-[#0000005f] rounded-xl p-6 h-fit text-white shadow-lg">
                        <h2 className="text-2xl font-bold flex mb-3 justify-start items-center gap-3">
                            <Avatar style={{ backgroundColor: pink[500] }}>
                                <NewspaperIcon />
                            </Avatar>{' '}
                            News
                        </h2>
                        {defaultNews.map((article, idx) => (
                            <div className="mb-6 p-4 rounded-lg border border-gray-700 bg-[#1e1e1e] shadow-md hover:shadow-lg transition-shadow" key={idx}>
                                <img
                                    src={article.coverImage}
                                    alt={article.title}
                                    className="w-full h-40 object-cover rounded-md mb-3"
                                />
                                <h3 className="text-lg font-semibold underline">{article.title}</h3>
                                <p className="text-base text-gray-300 leading-relaxed indent-6">
                                    {article.description}
                                </p>
                            </div>
                        ))}
                    </section>
                )}

                {/* Reports */}
                <section className="bg-[#0000005f] rounded-xl text-white p-6 shadow-lg">
                    <h2 className="text-2xl font-bold flex mb-3 justify-start items-center gap-3">
                        <Avatar style={{ backgroundColor: deepOrange[500] }}>
                            <FolderKanban />
                        </Avatar>{' '}
                        Reports
                    </h2>

                    {reports.length > 0
                        ? reports.slice(0, visibleCount).map((report, idx) => (
                            <div
                                key={idx}
                                className="mb-6 p-4 rounded-lg border border-gray-700 bg-[#1e1e1e] shadow-md hover:shadow-lg transition-shadow"
                            >
                                {report.coverImage && (
                                    <img
                                        src={report.coverImage}
                                        alt={report.title}
                                        className="w-full h-40 object-cover rounded-md mb-3"
                                    />
                                )}
                                <h3 className="text-lg font-semibold underline mb-2">{report.title}</h3>
                                <p className="text-base text-gray-300 leading-relaxed">
                                    {report.description}
                                </p>
                            </div>
                        ))
                        : defaultReports.map((report, idx) => (
                            <div
                                key={idx}
                                className="mb-6 p-4 rounded-lg border border-gray-700 bg-[#1e1e1e] shadow-md"
                            >
                                {report.coverImage && (
                                    <img
                                        src={report.coverImage}
                                        alt={report.title}
                                        className="w-full h-40 object-cover rounded-md mb-3"
                                    />
                                )}
                                <h3 className="text-lg font-semibold underline mb-2">{report.title}</h3>
                                <p className="text-base text-gray-300 leading-relaxed">
                                    {report.description}
                                </p>
                            </div>
                        ))
                    }

                    {/* Load More */}
                    {reports.length > visibleCount && (
                        <p
                            onClick={() => {
                                setVisibleCount((prev) => prev + 5);
                                handleLoadMore();
                            }}
                            className="text-gray-400 cursor-pointer hover:underline text-sm mt-4"
                        >
                            Load more
                        </p>
                    )}
                </section>

            </div>
        </main>
    );
};

export default FirstSection;
