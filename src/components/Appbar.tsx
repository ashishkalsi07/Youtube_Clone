import React from 'react'
import SearchBar from './SearchBar'

const Appbar = () => {
    return (
        <div className='grid grid-cols-3 h-12'>
            <div className='grid-span-1 flex'>
                <div className='p-3 ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div>
                    <img className='h-10 w-20 pt-2 ml-3' src="youtubelogo.svg" />
                </div>
            </div>
            <div className='hidden sm:block grid-span-1 pt-3 place-items-center'>
                <SearchBar />
            </div>
            <div className='hidden lg:block grid-span-1 flex justify-end place-items-center'>
                <div className='flex'>
                    <div className='border border-black pt-2 pr-5' >
                        <button className='text-white bg-slate-800 p-1 rounded-2xl'>+ Create</button>
                    </div>
                    <div className='mr-10 text-white rounded-2xl pt-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                    </div>
                    <div className='rounded-full w-10 h-10  mr-10 bg-slate-700'>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appbar
