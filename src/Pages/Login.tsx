'use client'
import CodeBackground from "@/Components/Authentication/CodeBackground";
import { motion } from 'framer-motion'

export default function LoginPage() {
  return (
    <div className="relative z-10 min-h-screen  flex items-center justify-center overflow-hidden">
      <CodeBackground />

      <motion.div
        initial={{ opacity: 0, filter: 'blur(4px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1 }}
        className="z-10 bg-[#ffffae14]/80 border-2 border-black backdrop-blur-lg p-10 rounded-xl shadow-xl w-full max-w-md text-white">
          <div className="heading flex justify-start mb-8 items-center gap-3">
            <img src="/Logo.png" alt="" className="w-12 h-12" />
            <div className="text_heading">
            <p className="font-bold text-2xl">Snippetix</p>
            <p className=" text-zinc-600">If Already Have an Account.</p>
          </div>
          </div>
        <h2 className="text-3xl font-bold mb-6 text-center font-mono">Login</h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] focus:outline-none"
          />
          <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#f7ef90a5] to-zinc-600 hover:from-zinc-600 cursor-pointer hover:to-[#f7ef90a5] delay-100 transition-colors">
            Login
          </button>
        </form>

        <div className="mt-6 flex flex-col items-center space-y-2 text-sm">
          <button className="text-gray-400 hover:underline cursor-pointer text-[14px]">Create account</button>
        </div>
      </motion.div>
    </div>
  );
}
