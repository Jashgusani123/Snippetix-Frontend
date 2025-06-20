import React from 'react'

const LandingMainNavbar = () => {
    return (
        <>
            <div className="flex sticky top-0 bg-[#0000008e] shadow-2xl rounded-2xl justify-between items-center h-20 px-10">
                <div className="flex items-center gap-2">
                    <img src="/Logo.png" alt="Snippetix Logo" className="w-10 h-10" />
                    <h1 className="text-2xl font-bold underline">Snippetix</h1>
                </div>
                <div>
                    <button className="bg-zinc-800 cursor-pointer hover:scale-105 transition text-white px-4 py-2 rounded">
                        Get Started
                    </button>
                </div>
            </div>
        </>
    )
}

export default LandingMainNavbar