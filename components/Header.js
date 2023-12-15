import Image from 'next/image'
import React from 'react'
import { IoSearch, IoHome, IoFlagOutline, IoPlayCircleOutline, IoCartOutline, IoChatboxEllipses } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { HiViewGrid } from "react-icons/hi";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";




import HeaderIcon from '@/components/HeaderIcon'



function Header() {
    return (
        <div className='flex items-center sticky top-0 z-50 bg-white p-2 lg:px-5 shadow-md ' >
            {/* Left  */}
            <div>
                <Image src="https://links.papareact.com/5me" width={40} height={40} layout='fixed' />
            </div>
            <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2' >
                <IoSearch className="text-xl text-gray-600 " />
                <input type="text" placeholder='Search Facebook' className=' ml-2 items-center bg-transparent outline-none placeholder-gray-500 hidden md:inline-flex ' />
            </div>
            {/* Center  */}
            <div className='flex justify-center flex-grow' >
                <div className='flex space-x-6 md:space-x-2' >
                    <HeaderIcon active Icon={IoHome} />
                    <HeaderIcon Icon={IoFlagOutline} />
                    <HeaderIcon Icon={IoPlayCircleOutline} />
                    <HeaderIcon Icon={IoCartOutline} />
                    <HeaderIcon Icon={HiUserGroup} />
                </div>
            </div>
            {/* Right  */}

            <div className='flex items-center sm:space-x-2 justify-end ' >
                {/* <Image  /> */}
                {/* profile picture */}
                <p className=' whitespace-nowrap font-semibold pr-3 ' >Davlatshoh</p>
                <HiViewGrid className="icon" />
                <IoChatboxEllipses className="icon" />
                <FaBell className="icon" />
                <IoIosArrowDown className="icon" />



            </div>
        </div>
    )
}

export default Header