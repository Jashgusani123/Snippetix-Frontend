'use client';

import React from 'react';
import Image from 'next/image';

const LandingMainNavbar = () => {
    return (
        <>
            <div className="flex sticky top-0 bg-[#00000063] shadow-2xl rounded-2xl justify-between items-center h-20 px-10 z-50 backdrop-blur-md">
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
                <div>
                    <button className="bg-zinc-800 cursor-pointer hover:scale-105 transition text-white px-4 py-2 rounded">
                        Get Started
                    </button>
                </div>
            </div>
        </>
    );
};

export default LandingMainNavbar;
