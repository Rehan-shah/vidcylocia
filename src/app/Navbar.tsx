"use client"

// import { usePathname } from 'next/navigation'
import Link from "next/link";



// export function NavBar() {
//   const pathname = usePathname()

let items = [
  {
    id: 1,
    link: "/",
    name: "Dashboard",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
    </svg>
    ,
  },
  {
    id: 2,
    link: "/test",
    name: "Test",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
    </svg>
    ,
  },
  {
    id: 3,
    link: "/test",
    name: "Test",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
    </svg>
    ,
  }

]
//   return (
//     <div>
//       {items.map((eleement) => {
//         let focus = eleement.link === pathname ? " bg-[#B6CAFF]" : "hover:bg-blue-100"
//         return <Link href={eleement.link} className={"flex m-2 p-2 rounded-md justify-start gap-2 text-md " + focus} > {eleement.icon} {eleement.name}</Link>
//       })}
//     </div >
//   )
// }
import { motion } from "framer-motion";
import { useState } from "react";



function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(items[0].id);

  return (

    <div className="px-2 pr-4 h-[100vh] bg-gradient-to-b from-gray-300 via-transparent to-gray-300 grid grid-row-8 content-between">
      <div>
        <h1 className="text-md font-semibold py-2">LOGO</h1>
      </div>
      <div >
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`${activeTab === item.id ? "text-navbar-default" : "hover:text-navbar-hover"
              } relative w-full p-2.5 my-0.5 text-md font-semibold text-navbar-default outline-sky-400 transition focus-visible:outline-2 block z-10 `}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === item.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 -z-10 bg-navbar-background"
                style={{ borderRadius: 10 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Link href={item.link} className="flex justify-start gap-1.5 text-md" >{item.icon} {item.name}</Link>
          </button>
        ))}
      </div>
      <div className="row-span-6 self-end py-10 ">
        Logout
      </div>
    </div>
  );
}

export default AnimatedTabs