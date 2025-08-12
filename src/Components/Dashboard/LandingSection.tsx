"use client";

import { getReports, getVideos } from "@/APIs/GetAPI";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Shared base type
interface BaseItem {
  type: string;
  title: string;
  url: string;
  publishedAt?: string;
}

// Video type
interface VideoItem extends BaseItem {
  type: "video" | "short";
  thumbnail: string;
}

// Report type
interface ReportItem extends BaseItem {
  type: "report";
  description: string;
  coverImage: string | null;
  author: string;
  authorImage: string | null;
  tags: string[];
}

type FeedItem = VideoItem | ReportItem;

const LandingSection = () => {
  const [content, setContent] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getVideos(), getReports({ lan: "python" })])
      .then(([videos, reports]) => {
        const merged: FeedItem[] = [...videos, ...reports];

        merged.sort((a, b) => {
          const dateA = new Date(a.publishedAt ?? 0).getTime();
          const dateB = new Date(b.publishedAt ?? 0).getTime();
          return dateB - dateA;
        });

        setContent(merged);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading feed:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="w-full px-4 sm:px-6 md:px-10 py-6 md:py-10">
      {!loading && (
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          🔥 Developer Feed
        </motion.h2>
      )}

      {loading ? (
        <div className="flex justify-center h-80 sm:h-96 items-center relative overflow-hidden">
          <div className="absolute w-40 h-40 sm:w-50 sm:h-50 rounded-full bg-zinc-500 opacity-30 animate-ping"></div>
          <div className="absolute w-40 h-40 sm:w-50 sm:h-50 rounded-full bg-zinc-500 opacity-30 animate-ping"></div>
          <div className="absolute w-40 h-40 sm:w-50 sm:h-50 rounded-full bg-zinc-500 opacity-30 animate-ping"></div>

          <div className="z-10 flex justify-center flex-col items-center h-48 sm:h-60 w-48 sm:w-60 rounded-full bg-[#ffffaa] shadow-xl px-4 text-center">
            <p className="font-bold poppins-bold text-2xl sm:text-3xl">
              Snippe<span className="text-zinc-800">tix</span>
            </p>

            <p className="font-semibold text-base sm:text-lg mt-2">
              <span className="text-zinc-800">Loading</span>
              <span className="animate-blink inline-block">.</span>
              <span className="animate-blink delay-200 inline-block">.</span>
              <span className="animate-blink delay-400 inline-block">.</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="masonry-layout px-0 sm:px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] hover:bg-[#1f1f1f] rounded-2xl p-3 sm:p-4 h-fit text-white shadow-lg transition duration-200 block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              {item.type === "video" || item.type === "short" ? (
                <div
                  className={`w-full overflow-hidden rounded-lg mb-3 ${item.type === "short" ? "aspect-[9/16]" : "aspect-video"}`}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                (() => {
                  const report = item as ReportItem;
                  return (
                    <>
                      {report.coverImage && (
                        <div className="w-full overflow-hidden rounded-lg mb-3 aspect-video">
                          <img
                            src={report.coverImage}
                            alt={report.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )}
                      {/* ... rest of report rendering */}
                    </>
                  );
                })()
              )}

            </motion.a>
          ))}
        </div>
      )}
    </main>
  );
};

export default LandingSection;
