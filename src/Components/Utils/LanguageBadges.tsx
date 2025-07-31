'use client'

import Marquee from 'react-fast-marquee';

// Languages with individual colors
const languages = [
  { name: "HTML", color: "from-orange-500 to-yellow-500" },
  { name: "CSS", color: "from-blue-500 to-cyan-400" },
  { name: "JavaScript", color: "from-yellow-400 to-yellow-200" },
  { name: "TypeScript", color: "from-blue-600 to-blue-400" },
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "Vue", color: "from-green-400 to-emerald-500" },
  { name: "Angular", color: "from-red-500 to-pink-500" },
  { name: "Node.js", color: "from-lime-400 to-green-500" },
  { name: "Express", color: "from-gray-500 to-zinc-400" },
  { name: "PHP", color: "from-indigo-400 to-purple-500" },
  { name: "Python", color: "from-yellow-300 to-blue-300" },
  { name: "Java", color: "from-red-400 to-orange-400" },
  { name: "C#", color: "from-purple-500 to-indigo-500" },
  { name: "C++", color: "from-blue-500 to-gray-300" },
  { name: "Go", color: "from-sky-400 to-cyan-400" },
  { name: "Ruby", color: "from-rose-500 to-pink-500" },
  { name: "Swift", color: "from-orange-400 to-red-500" },
  { name: "Kotlin", color: "from-purple-400 to-pink-400" },
  { name: "Rust", color: "from-zinc-600 to-gray-500" },
  { name: "SQL", color: "from-teal-400 to-cyan-300" },
];

const LanguageBadges = () => {
  return (
    <div className=" px-4 sm:px-10 overflow-hidden mt-6">
      <div className="w-full rounded-xl bg-[#1c1c1c] p-3">
        <Marquee
          pauseOnHover
          speed={10}
          gradient={false}
          className="overflow-hidden"
        >
          {languages.map((lang, index) => (
            <span
              key={index}
              className={`mx-2 px-5 py-2 rounded-3xl text-2xl font-bold whitespace-nowrap shadow 
                border-2 text-transparent bg-clip-text border-white
                bg-gradient-to-r ${lang.color} `}
              style={{
                borderImage: `linear-gradient(to right, var(--tw-gradient-stops)) 1`,
              }}
            >
              {lang.name}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LanguageBadges;
