'use client';

import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { motion } from 'framer-motion';
import { BrainCircuitIcon, CodeSquare, LucideNewspaper, StarsIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const LandingMainNavbar = ({ isDashboard }: { isDashboard?: boolean }) => {
    const route = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [selectedMenu, setSelectedMenu] = useState('News & Reports');

    const menuItems = [
        {
            label: 'News & Reports',
            icon: <LucideNewspaper size={20} color="#10B981" />, // emerald
            path: '/user/dashboard',
        },
        {
            label: 'Smart Search',
            icon: <StarsIcon size={20} color="#3B82F6" />, // blue
            path: '/user/profile',
        },
        {
            label: 'AI Explanations',
            icon: <BrainCircuitIcon size={20} color="#8B5CF6" />, // purple
            path: '/user/settings',
        },
        {
            label: 'Practice',
            icon: <CodeSquare size={20} color="#F59E0B" />, // amber
            path: '/user/settings',
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
                    <h1 className="text-2xl font-bold text-white">Snippetix</h1>
                </div>
                {!isDashboard && (
                    <button
                        className="bg-zinc-800 cursor-pointer hover:scale-105 transition text-white px-4 py-2 rounded"
                        onClick={() => route.push('user/dashboard')}
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
                        <ul className="flex justify-evenly items-center flex-wrap gap-10">
                            {menuItems.map((item, index) => {
                                const isSelected = selectedMenu === item.label;
                                return (
                                    <motion.li
                                        key={index}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <button
                                            className={"w-full text-white flex flex-col items-center gap-1 transition duration-200 cursor-pointer" + (isSelected ? " bg-amber-300 text-black rounded-xl shadow-md px-4 py-2" : "")}
                                            onClick={() => route.push(item.path)}
                                        >
                                            {item.icon}
                                            <span className="text-sm font-medium">{item.label}</span>
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
        </>
    );
};

export default LandingMainNavbar;
