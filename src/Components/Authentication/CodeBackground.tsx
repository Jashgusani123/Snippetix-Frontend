"use client";
import { motion } from "framer-motion";

export default function CodeBackground() {
    const code = `
function handleLogin(user) {
  if (!user.email || !user.password) {
    throw new Error("Missing fields");
  }
  const token = authenticate(user);
  return token;
}

function authenticate(user) {
  return user.email + "_authed";
}

console.log("System Ready...");
console.log("Auth Layer Loaded...");
console.log("Secure Boot Complete...");

fetch("/api/user")
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
`;

    return (
        <div className="absolute inset-0 bg-black overflow-hidden z-0">
            <motion.div
                initial={{ filter: "blur(6px)" }}
                animate={{
                    filter: [
                        "blur(5px)",
                        "blur(2px)",
                        "blur(5px)"
                    ]
                }}
                transition={{
                    duration: 10,
                    delay:1,
                    repeat: Infinity,
                    ease: "easeIn"
                }}
                className="w-full h-full relative bg-gradient-to-r from-[#f7ef90a5] via-[#f7ef90f7] to-[#f7ef9060] bg-clip-text text-transparent font-mono text-2xl px-10 py-10"
                style={{
                    maskImage: "radial-gradient(circle at center, white 40%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(circle at center, white 40%, transparent 100%)"
                }}
            >
                <pre className="whitespace-pre-wrap pointer-events-none select-none leading-relaxed">
                    {code.repeat(10)}
                </pre>
            </motion.div>
        </div>
    );
}
