import React from 'react';
import { motion } from 'framer-motion';
import MiddleSection from './MiddleSection';

const LandingMain = () => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center px-4">
        {/* Headings */}
        <h1 className="text-5xl text-white font-extrabold text-center leading-tight">
          Find, Fix, and Learn — Together.
        </h1>
        <p className="text-lg text-gray-400 mt-4 text-center max-w-xl">
          A modern platform to search, share, and solve code problems &mdash; with the developer community.
        </p>

        {/* Code Banner */}
        <div className="banner flex gap-5 bg-black rounded-2xl p-4 justify-around mt-10 mb-10">
          <div className="text-left space-y-3 max-w-md">
            <p className="text-lg text-gray-300 bg-zinc-900 rounded-md w-full">
              👋 Welcome to, <span className="font-bold">Snippetix</span>
            </p>
            <h3 className="text-2xl font-bold text-white">
              Code meets clarity. Learn, explain, and evolve.
            </h3>
            <p className="text-gray-400">
              Drop your keyword, get smart explanations, explore solutions, and learn from real developers.
            </p>
          </div>

          <motion.div
            className="bg-[#0f0f0f] text-white p-5 rounded-lg w-[320px] mt-10 shadow-lg border border-[#1f1f1f] relative"
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1 }}
          >
            {/* Window dots */}
            <div className="flex gap-2 absolute top-3 left-3">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            {/* Code */}
            <pre className="text-sm font-mono whitespace-pre-wrap mt-8">
              <code>
                <span className="text-purple-400">function</span>{' '}
                <span className="text-pink-500">greet</span>(name) {'{'}
                {'\n  '}
                <span className="text-purple-400">return</span>{' '}
                <span className="text-yellow-300">`Hello, ${'{name}'}!`</span>;
                {'\n'}
                {'}'}
                {'\n'}
                <span className="text-blue-400">console</span>.
                <span className="text-teal-400">log</span>(
                greet(<span className="text-green-400">&quot;Developer&quot;</span>))
              </code>
            </pre>
          </motion.div>
        </div>

        <MiddleSection />
      </div>
    </>
  );
};

export default LandingMain;
