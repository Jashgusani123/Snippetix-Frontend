"use client";

import { MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react";
import { useRouter } from "next/navigation";
export const problems = [
  {
    id: "1",
    title: "Two Sum",
    difficulty: "Easy",
    comments: 12,
    likes: 40,
    dislikes: 5,
    description: "Find two numbers that add up to the target.",
    sampleCode: `function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  }`
  },
  {
    id: "2",
    title: "Reverse Linked List",
    difficulty: "Medium",
    comments: 8,
    likes: 25,
    dislikes: 3,
    description: "Reverse a linked list iteratively.",
    sampleCode: `function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }`
  },
  {
    id: "3",
    title: "Reverse Linked List",
    difficulty: "Hard",
    comments: 8,
    likes: 25,
    dislikes: 3,
    description: "Reverse a linked list iteratively.",
    sampleCode: `function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }`
  }
];

export default function FourthSection() {
  const router = useRouter();

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Easy": return "bg-[#a1fb9a4b] border-green-400 border-2 rounded-4xl px-4 py-1 text-white text-sm uppercase";
      case "Medium": return "bg-[#868b58] border-yellow-400 border-2 rounded-4xl px-4 py-1 text-white text-sm uppercase";
      case "Hard": return "bg-[#ff4f4f4b] border-red-400 border-2 rounded-4xl px-4 py-1 text-white text-sm uppercase";
      default: return "";
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-4">
      <h1 className="font-bold text-3xl text-white">Problems</h1>
      {problems.map((p) => (
        <div
          key={p.id}
          className="flex justify-between items-center border rounded-xl shadow-md p-4 bg-zinc-900 text-white hover:bg-zinc-800 transition cursor-pointer"
            onClick={() => router.push(`/problems/${p.id}`)}
          // onClick={() => setShowIDE(true)}
        >
          {/* Left Side */}
          <div>
            <h2 className="text-lg font-semibold mb-2">{p.title}</h2>
            <div className="flex space-x-3">
              <div className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-lg">
                <MessageSquare size={16} className="text-gray-400" />
                <span>{p.comments}</span>
              </div>
              <div className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-lg">
                <ThumbsUp size={16} className="text-green-400" />
                <span>{p.likes}</span>
              </div>
              <div className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-lg">
                <ThumbsDown size={16} className="text-red-400" />
                <span>{p.dislikes}</span>
              </div>
            </div>
          </div>

          {/* Right Side Difficulty */}
          <span className={`px-3 py-1 text-sm rounded-full font-medium ${getDifficultyColor(p.difficulty)}`}>
            {p.difficulty}
          </span>
        </div>
      ))}
    </div>
  );
}
