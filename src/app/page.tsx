"use client"
import { atom, useAtom } from 'jotai'
import { useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"





const inter = Inter({ subsets: ['latin'] })

import * as React from "react"



function Search() {

  return (
    <div className="border-r-8 bg-[#F7F8F9] flex py-2 px-3 rounded-2xl w-2/6 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[24px] h-[24px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>


      <input placeholder='Search here' className='bg-[#F7F8F9] text-md px-2 focus:outline-none' />
    </div>
  )
}

function CurrentCourse() {
  return (
    <div className="rounded-2xl p-5 px-4 mt-5 " style={{ boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.10)' }}>
      <h1 className={`text-lg font-[600] opacity-75 `}>Recent Activity:</h1>
      <div className='lg:flex md:flex'>
        <div className='pt-2 pr-4'>
          <Image src={"https://i.ytimg.com/vi/d_qvLDhkg00/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1bxVWiBjy9XzSjL8GOPqfdjqbZg"}
            width={220}
            height={120}
            alt='couresa'
            style={{ borderRadius: "10px" }}
          />
          <p className='text-sm pt-2 text-[#FD8B1F]'>Math</p>
          <p className='text-md text-black font-[500] opacity-75'>Understing bellcurve</p>
          <p className='text-xs text-[#808190] '>50% | 20 hrs compelted</p>
        </div>
        <div className='pt-2 pr-4'>
          <Image src={"https://i.ytimg.com/vi/d_qvLDhkg00/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1bxVWiBjy9XzSjL8GOPqfdjqbZg"}
            width={220}
            height={120}
            alt='couresa'
            style={{ borderRadius: "10px" }}
          />
          <p className='text-sm pt-2 text-[#FD8B1F]'>Math</p>
          <p className='text-md text-black font-[500] opacity-75 '>Understing bellcurve</p>
          <p className='text-xs text-[#808190] '>50% | 20 hrs compelted</p>
        </div>
      </div>
    </div>

  )
}

function TableSection() {

  return (
    <div className='py-6 px-1'>
      <h1 className={`text-lg font-[600] pl-2 opacity-75 `}>Course Your taking:</h1>
      <Table  >
        <TableHeader>
          <TableRow>
            <TableHead>Course Title</TableHead>
            <TableHead>Lessons Completed</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="font-medium ">
            <TableCell className=' items-center flex ' ><img alt={"igcse logo"} src={"https://merton.edu.gh/wp-content/uploads/2021/09/Cambridge-Logos-03.png"} width={48} height={48} className='rounded-2xl p-2' /> Math</TableCell>
            <TableCell>8/<span className="text-[#7A7C8C]">12  </span>({Math.round(8 / 12 * 100)}%)</TableCell>
            <TableCell>8h 10m</TableCell>
            <TableCell>IGCSE (600)</TableCell>
          </TableRow>
          <TableRow className="font-medium">
            <TableCell className=' items-center flex ' ><img alt={"igcse logo"} src={"https://merton.edu.gh/wp-content/uploads/2021/09/Cambridge-Logos-03.png"} width={48} height={48} className='rounded-2xl p-2' /> Math</TableCell>
            <TableCell>8/<span className="text-[#7A7C8C]">12  </span>({Math.round(8 / 12 * 100)}%)</TableCell>
            <TableCell>8h 10m</TableCell>
            <TableCell>IGCSE (600)</TableCell>
          </TableRow>
          <TableRow className="font-medium">
            <TableCell className=' items-center flex ' ><img alt={"igcse logo"} src={"https://merton.edu.gh/wp-content/uploads/2021/09/Cambridge-Logos-03.png"} width={48} height={48} className='rounded-2xl p-2' /> Math</TableCell>
            <TableCell>8/<span className="text-[#7A7C8C]">12  </span>({Math.round(8 / 12 * 100)}%)</TableCell>
            <TableCell>8h 10m</TableCell>
            <TableCell>IGCSE (600)</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div >
  )

}

export default function Home() {


  return (
    <div className='mx-5 mt-3'>
      <Search />
      <CurrentCourse />
      <div className='grid grid-cols-4'>
        <div className='col-span-3'><TableSection /></div>
      </div>
    </div>
  )
}
