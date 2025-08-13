"use client";

import {
    ThumbDownAlt as ThumbDownAltIcon,
    ThumbDownOffAlt as ThumbDownOffAltIcon,
    ThumbUpAlt as ThumbUpAltIcon,
    ThumbUpOffAlt as ThumbUpOffAltIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";
import { useState } from "react";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export const problems = [
    { id: "1", title: "Two Sum", difficulty: "Easy", comments: 12, likes: 40, dislikes: 5, description: "Find two numbers that add up to the target.", sampleCode: `function twoSum(nums, target) { ... }` },
    { id: "2", title: "Reverse Linked List", difficulty: "Medium", comments: 8, likes: 25, dislikes: 3, description: "Reverse a linked list iteratively.", sampleCode: `function reverseList(head) { ... }` }
];

const Comments = [
    { avatar: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png", name: "Jash Gusani", comment: "What if we do with Python...", like: 10, dislike: 1 },
    { avatar: "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg", name: "Ram Singh", comment: "Hello Guys , How are you ??", like: 0, dislike: 1 },
];

export default function ProblemDetail({ problemId }: { problemId: string }) {
    const problem = problems.find((p) => p.id === problemId);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [code, setCode] = useState("// Write your code here in JavaScript only");
    const [output, setOutput] = useState("");
    const [commentReactions, setCommentReactions] = useState(
        Comments.map(() => ({ liked: false, disliked: false }))
    );

    if (!problem) {
        return <div className="p-6 text-white">Problem not found</div>;
    }

    const runCode = () => {
        try {
          const result = new Function(code)();
          setOutput(String(result));
        } catch (err: unknown) {
          if (err instanceof Error) {
            setOutput(err.message);
          } else {
            setOutput(String(err));
          }
        }
      };
      
    const handleCommentLike = (index: number) => {
        setCommentReactions((prev) =>
            prev.map((r, i) =>
                i === index
                    ? { liked: !r.liked, disliked: r.liked ? r.disliked : false }
                    : r
            )
        );
    };

    const handleCommentDislike = (index: number) => {
        setCommentReactions((prev) =>
            prev.map((r, i) =>
                i === index
                    ? { disliked: !r.disliked, liked: r.disliked ? r.liked : false }
                    : r
            )
        );
    };


    return (
        <motion.div className="flex justify-between items-center gap-4 w-full h-full flex-wrap">
            <div className="w-full text-white space-y-4">
                <div className="flex flex-col w-full">
                    {/* Row with title and button */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            {problem.id}) {problem.title}
                            <span className="bg-[#a1fb9a4b] border-green-400 border-2 rounded-4xl px-4 py-1 text-white text-sm uppercase">
                                {problem.difficulty}
                            </span>
                        </h1>

                        <button
                            onClick={runCode}
                            className="bg-green-600 hover:bg-green-700 cursor-pointer px-4 w-20 text-xl py-2 rounded-lg"
                        >
                            Run
                        </button>
                    </div>

                    {/* Description below */}
                    <p className="text-gray-400 mt-2">{problem.description}</p>
                </div>


                {/* Monaco Editor */}
                <div className="flex justify-center flex-col flex-wrap gap-0">
                    <div className="border border-gray-700 rounded-t-lg overflow-hidden">
                        <MonacoEditor
                            height="300px"
                            language="javascript"
                            theme="vs-dark"
                            value={code}
                            onChange={(val) => setCode(val || "")}
                        />

                    </div>
                    <div className="flex justify-between w-fit gap-2 bg-zinc-900 rounded-b-lg p-2">
                        {/* Add here like if Liked then can't do Dislike  */}
                        <span className="cursor-pointer hover:bg-zinc-600 rounded-full p-2 items-center flex justify-center gap-2 bg-zinc-700" onClick={() => setIsLiked(!isLiked)}>{isLiked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}123</span>
                        <span className="cursor-pointer hover:bg-zinc-600 rounded-full p-2 items-end flex justify-center gap-2 bg-zinc-700" onClick={() => setIsDisliked(!isDisliked)}>{isDisliked ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}123</span>
                    </div>
                </div>

                {/* Output Section */}
                <div className="bg-zinc-800 p-4 rounded-lg">
                    <strong>Output:</strong>
                    <pre className="whitespace-pre-wrap">{output}</pre>
                </div>
            </div>

            {/* Comments Section */}
            <h2 className="text-lg font-bold mb-2 text-white underline">Comments:</h2>
            <div className="p-4 rounded-lg h-full flex justify-start flex-wrap w-full gap-4">
                {Comments.map((comment, index) => {
                    const { liked, disliked } = commentReactions[index];
                    return (
                        <div
                            key={index}
                            className="bg-[#00000052] p-4 border-2 w-80 border-black rounded-2xl shadow-lg transition-transform hover:scale-105 flex flex-col justify-between"
                        >
                            {/* Top section: avatar, name, comment */}
                            <div>
                                {/* Avatar + Name */}
                                <div className="flex items-center gap-3 mb-2">
                                    <img
                                        src={comment.avatar}
                                        alt={comment.name}
                                        className="rounded-full w-12 h-12 border-2 border-white"
                                    />
                                    <p className="font-bold text-lg text-white">{comment.name}</p>
                                </div>

                                {/* Comment text */}
                                <div className="bg-black/40 rounded-lg p-3">
                                    <p className="text-sm text-gray-200 italic leading-relaxed">
                                        {comment.comment}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom section: like/dislike */}
                            <div className="flex justify-between w-full gap-2 bg-zinc-900 rounded-lg p-2 mt-3">
                                <span
                                    className="cursor-pointer hover:bg-zinc-600 rounded-full p-2 flex items-center gap-2 bg-zinc-700"
                                    onClick={() => handleCommentLike(index)}
                                >
                                    {liked ? <ThumbUpAltIcon className="text-green-400" /> : <ThumbUpOffAltIcon className="text-green-400" />}
                                    {comment.like + (liked ? 1 : 0)}
                                </span>
                                <span
                                    className="cursor-pointer hover:bg-zinc-600 rounded-full p-2 flex items-center gap-2 bg-zinc-700"
                                    onClick={() => handleCommentDislike(index)}
                                >
                                    {disliked ? <ThumbDownAltIcon className="text-red-400" /> : <ThumbDownOffAltIcon className="text-red-400" />}
                                    {comment.dislike + (disliked ? 1 : 0)}
                                </span>
                            </div>
                        </div>

                    );
                })}
            </div>
        </motion.div>
    );
}
