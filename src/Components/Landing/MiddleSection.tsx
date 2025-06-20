"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react"; // optional icon
import { Sparkles, Users, MessageSquare } from "lucide-react";

export default function MiddleSection() {
    return (
        <section className="w-full py-20 bg-[#0e0e0e4e] border-2 border-black rounded-2xl text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                    Why Developers Choose Snippetix
                </h2>
                <p className="text-gray-400 mb-14 text-lg">
                    Understand code, share insights, and grow with the community.
                </p>

                {/* 3 Key Features */}
                <div className="grid md:grid-cols-3 gap-10 text-left">
                    <div className="bg-[#171717] p-6 rounded-xl border border-[#222] shadow-md hover:shadow-xl transition">
                        <Sparkles className="w-8 h-8 text-purple-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">AI Code Explainer</h3>
                        <p className="text-gray-400">
                            Paste confusing code and get instant, accurate explanations powered by AI.
                        </p>
                    </div>

                    <div className="bg-[#171717] p-6 rounded-xl border border-[#222] shadow-md hover:shadow-xl transition">
                        <MessageSquare className="w-8 h-8 text-blue-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Snippet Discussions</h3>
                        <p className="text-gray-400">
                            Share code, ask questions, and get help from real developers.
                        </p>
                    </div>

                    <div className="bg-[#171717] p-6 rounded-xl border border-[#222] shadow-md hover:shadow-xl transition">
                        <Users className="w-8 h-8 text-green-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Developer-First</h3>
                        <p className="text-gray-400">
                            Built by and for devs — no bloat, no fluff. Just code, clarity, and community.
                        </p>
                    </div>
                </div>

                <div className="w-full border-t border-[#222] mt-16 mb-12" />

                {/* Workflow steps */}
                <h3 className="text-3xl font-bold mb-4">How It Works</h3>
                <div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
                    {[
                        {
                            step: "Search keyword",
                            icon: <Code className="text-yellow-300" />,
                            desc: "Easily search keyword to get started or Understand."
                        },
                        {
                            step: "View AI-Powered Explanation",
                            icon: <Sparkles className="text-purple-400" />,
                            desc: "Understand what your code does or Explain any Things By Searching."
                        },
                        {
                            step: "Watch & Learn via YouTube",
                            icon: <MessageSquare className="text-red-400" />,
                            desc: "Get Video, Tutorials, and more to enhance your learning."
                        },
                        {
                            step: "Solve Problems with Community",
                            icon: <Users className="text-green-400" />,
                            desc: "Ask questions, share fixes, and contribute answers."
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="flex-1 bg-[#151515] border border-[#222] p-6 rounded-xl text-center shadow-md"
                        >
                            <div className="flex justify-center mb-3">{item.icon}</div>
                            <p className="text-lg font-semibold mb-1">{item.step}</p>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
