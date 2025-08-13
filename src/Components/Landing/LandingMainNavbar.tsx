'use client';

import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { motion } from 'framer-motion';
import { BrainCircuitIcon, CodeSquare, LayoutDashboardIcon, LucideNewspaper, StarsIcon } from 'lucide-react';
// import { TbBrandFeedly } from "react-icons/tb";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const LandingMainNavbar = ({ isDashboard, setStep , isProblemDetails }: { isDashboard?: boolean, setStep?: (step: number) => void , isProblemDetails?:boolean}) => {
    const route = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [selectedMenu, setSelectedMenu] = useState('Developer Feed');

    const menuItems = [
        {
            label: 'Developer Feed',
            icon: <LayoutDashboardIcon size={20} color="#F57F0B" />,
            path: '/user/dashboard',
            number: 0
        },
        {
            label: 'News & Reports',
            icon: <LucideNewspaper size={20} color="#10B981" />, // emerald
            path: '/user/dashboard',
            number: 1
        },
        {
            label: 'Smart Search',
            icon: <StarsIcon size={20} color="#3B82F6" />, // blue
            path: '/user/dashboard',
            number: 2
        },
        {
            label: 'AI Explanations',
            icon: <BrainCircuitIcon size={20} color="#8B5CF6" />, // purple
            path: '/user/dashboard',
            number: 3
        },
        {
            label: 'Practice',
            icon: <CodeSquare size={20} color="#F59E0B" />, // amber
            path: '/user/dashboard',
            number: 4
        },
    ];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        }

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);


    return (
        <>
            <div className="flex sticky top-0 z-50 bg-[#00000063] shadow-2xl rounded-2xl justify-between items-center h-20 px-10 backdrop-blur-md">

                <div className="flex items-center gap-2">
                    <Image
                        src="/Logo.png"
                        alt="Snippetix Logo"
                        width={40}
                        height={40}
                        className="rounded"
                        priority
                    />
                    <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={()=>route.replace("/")}>Snippetix</h1>
                </div>
                {!isDashboard && !isProblemDetails && (
                    <button
                        className="bg-zinc-800 cursor-pointer hover:scale-105 transition text-white px-4 py-2 rounded"
                        onClick={() => route.replace('user/dashboard')}
                    >
                        Get Started
                    </button>
                )}
                {isDashboard && (
                    <>
                        <div className="dashboard_option flex justify-around items-center gap-4 w-30">
                            <button
                                className="bg-zinc-800 cursor-pointer hover:scale-105 transition text-white px-4 py-2 rounded"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                Menu
                            </button>
                            <button className='cursor-pointer hover:scale-105 transition' onClick={() => route.push('/user/profile')}>
                                <Avatar sx={{ bgcolor: deepOrange[900] }} />
                            </button>
                        </div>

                    </>
                )}
            {isProblemDetails && !isDashboard && (
                    <>
                        <div className="dashboard_option flex justify-around items-center gap-4 w-40">
                            <button
                                className="bg-zinc-800 cursor-pointer hover:scale-105 transition text-white px-4 py-2 rounded"
                                onClick={() => route.replace("/user/dashboard")}
                            >
                                Problems List
                            </button>
                        </div>

                    </>
                )}
            </div>

            {menuOpen && (
                <div className="flex justify-center items-center w-full fixed bottom-0 z-50">
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute bottom-10 bg-[#0000007e] shadow-lg rounded-lg p-6 z-50 backdrop-blur-sm"
                    >
                        <ul className="flex justify-start items-center flex-nowrap gap-4 overflow-x-auto scrollbar-hide md:gap-10">
                            {menuItems.map((item, index) => {
                                const isSelected = selectedMenu === item.label;
                                return (
                                    <motion.li
                                        key={index}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className="shrink-0"
                                    >
                                        <button
                                            className={
                                                "w-full flex flex-col items-center gap-0.5 transition duration-200 cursor-pointer text-white text-xs sm:text-sm" +
                                                (isSelected ? " bg-amber-300 text-black rounded-xl shadow-md px-2 py-1" : "")
                                            }
                                            onClick={() => {
                                                setSelectedMenu(item.label)
                                                setStep?.(item.number)
                                            }}
                                        >
                                            <div className="sm:scale-100 scale-90">{item.icon}</div>
                                            <span className="font-medium">{item.label}</span>
                                        </button>
                                    </motion.li>
                                )
                            })}
                        </ul>


                    </motion.div>
                </div>
            )}

            <style jsx>{`
                .text-gradient {
                    background: linear-gradient(135deg, #60a5fa, #a78bfa);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
            <style jsx global>{`
    /* Hide scrollbar but keep scrolling */
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
    .scrollbar-hide {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`}</style>
        </>
    );
};

export default LandingMainNavbar;
