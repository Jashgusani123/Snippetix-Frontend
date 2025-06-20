import React from 'react';
import { motion } from 'framer-motion';

const LandingFooter = () => {
  return (
    <footer className="flex w-full justify-center">
      <div className="bg-[#1f1f1fde] mb-10 rounded-2xl border-2 border-black shadow-2xl w-fit justify-center flex items-center py-12 px-6 mt-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white">

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 * 0.2 }}
            className="space-y-4"
          >
            <p className="text-xl font-semibold">Features</p>
            <ul className="space-y-2 text-base text-gray-300">
              <li>🔍 Smart snippet search across languages</li>
              <li>🧠 AI-powered explanation for confusing code</li>
              <li>📚 Categorize by language, tags, or folders</li>
              <li>💬 Community comments &amp; discussions</li>
              <li>✅ One-click Google authentication</li>
              <li>📤 Easily share snippets with others</li>
            </ul>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 * 0.2 }}
            className="space-y-4"
          >
            <p className="text-xl font-semibold">Testimonials</p>
            <p className="text-gray-400 text-sm">
              What developers are saying about Snippetix.
            </p>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                💬 &quot;I stopped saving code in Notion. Snippetix is cleaner and way faster!&quot;<br />
                <span className="text-xs text-gray-400">
                  &mdash; Rohan, Frontend Developer
                </span>
              </div>
              <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                💬 &quot;I love that I can ask doubts on any snippet. It&apos;s like Stack Overflow + Gist.&quot;<br />
                <span className="text-xs text-gray-400">
                  &mdash; Ayesha, MERN Stack Dev
                </span>
              </div>
            </div>
          </motion.div>

          {/* Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2 * 0.2 }}
            className="space-y-4"
          >
            <p className="text-xl font-semibold">Integrations</p>
            <p className="text-gray-400 text-sm">
              Works well with your favorite tools and platforms.
            </p>
            <ul className="space-y-2 text-base text-gray-300">
              <li>🤖 <strong>OpenAI API</strong> &mdash; Smart code explanation</li>
              <li>🌐 <strong>Google Search</strong> &mdash; Related YouTube + Docs content</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
