'use client'
import LandingBackAnimation from '@/Animations/LandingBackAnimation'
import LandingMainNavbar from '@/Components/Landing/LandingMainNavbar'
import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import { Settings } from 'lucide-react'

const page = () => {
  const searchHistory = [
    { date: "12 - Jul", option: "Smart Search", searchWord: "React useEffect" },
    { date: "18 - Jul", option: "AI Explanations", searchWord: "Tailwind layout" },
    { date: "21 - Jul", option: "Practice", searchWord: "Java Spring JWT" },
    { date: "23 - Jul", option: "AI Explanations", searchWord: "Node.js vs Java" },
  ];
  return (
    <>
      <div className="relative min-h-screen scrollbar-hidden w-full bg-[#020202f0] overflow-y-auto">
        <LandingBackAnimation />
        <div className="div absolute z-10 flex w-full flex-col min-h-screen">


          <LandingMainNavbar isDashboard={true} />
          <div className='p-10'>
            <div className="cover w-full flex justify-end">

            <section className="first_section  border-2 border-white rounded-2xl bg-[#161616]  flex justify-end w-fit gap-5 p-5 items-center text-white relative">
              <div className="description space-y-2 text-lg bg-zinc-800 p-5 rounded-2xl border-2 relative">
                {/* Tail */}
                <div className="absolute -right-2 top-14 w-4 h-4 bg-zinc-800 border-t-2 border-r-2 border-white rotate-45"></div>

                {/* Text Content */}
                <p>👤 Name: <span className="font-semibold">Jash Gusani</span></p>
                <p>📧 Email: <span className="font-semibold">jashgusani@gmail.com</span></p>
                <span className='w-full flex justify-start cursor-pointer '><Settings /></span>
              </div>
              <button className="cursor-pointer hover:scale-105 transition relative z-10">
                <Avatar sx={{ bgcolor: deepOrange[900], width: "300px", height: "300px" }} />
              </button>

              
            </section>
            </div>

            <section className="w-full p-5 text-white z-50">
              <h2 className="text-2xl font-bold mb-4">🔎 Search History</h2>
              <div className="overflow-x-auto rounded-lg border border-zinc-700">
                <table className="min-w-full text-left text-sm bg-zinc-900">
                  <thead className="bg-zinc-800 text-zinc-200">
                    <tr>
                      <th className="px-6 py-3 border-b border-zinc-700">Date</th>
                      <th className="px-6 py-3 border-b border-zinc-700">In Type</th>
                      <th className="px-6 py-3 border-b border-zinc-700">Search Term</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchHistory.map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-zinc-700 transition-colors border-b border-zinc-800"
                      >
                        <td className="px-6 py-4">{item.date}</td>
                        <td className="px-6 py-4">{item.option}</td>
                        <td className="px-6 py-4 font-medium text-white">
                          {item.searchWord}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </div>


      </div>
    </>
  )
}

export default page