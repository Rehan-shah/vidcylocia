import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



function Search() {

  return (
    <div className="border-r-8 bg-[#F7F8F9] flex py-2 px-3 rounded-2xl w-2/6 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[24px] h-[24px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>


      <input placeholder='Search here' className='bg-[#F7F8F9] text-lg px-2 focus:outline-none' />
    </div>
  )
}

function CurrentCourse() {
  return (
    <div className="rounded-2xl p-5 px-5 mt-5 " style={{ boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.10)' }}>
      <h1 className={`text-2xl ${inter.className} `}>Recent Activity:</h1>
      <div className='flex'>
        <div className='pt-4 pr-4'>
          <Image src={"https://i.ytimg.com/vi/d_qvLDhkg00/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1bxVWiBjy9XzSjL8GOPqfdjqbZg"}
            width={220}
            height={120}
            style={{ borderRadius: "10px" }}
          />
          <p className='text-md pt-2 text-[#FD8B1F]'>Math</p>
          <p className='text-lg text-black font-[500] '>Understing bellcurve</p>
          <p className='text-xs text-[#808190] '>50% | 20 hrs compelted</p>
        </div>
        <div className='pt-4'>
          <Image src={"https://i.ytimg.com/vi/d_qvLDhkg00/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1bxVWiBjy9XzSjL8GOPqfdjqbZg"}
            width={220}
            height={120}
            style={{ borderRadius: "10px" }}
          />
          <p className='text-md pt-2 text-[#FD8B1F]'>Math</p>
          <p className='text-lg text-black font-[500] '>Understing bellcurve</p>
          <p className='text-xs text-[#808190] '>50% | 20 hrs compelted</p>
        </div>
      </div>
    </div>

  )
}

export default function Home() {
  return (
    <div className='mx-5 mt-3'>
      <Search />
      <CurrentCourse />
    </div>
  )
}
