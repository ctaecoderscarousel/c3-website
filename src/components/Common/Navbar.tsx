import Link from 'next/link'
import { Logo } from './Logo'
import { MobileNavbar } from './MobileNavbar'
import { FcGoogle } from 'react-icons/fc'
import { FiLogOut } from 'react-icons/fi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { RxDashboard } from 'react-icons/rx'
import React, { FC, useEffect, useRef, useState } from 'react'
import { useAuth } from '../../context/auth'
// import Image from 'next/image'
import router from 'next/router'

export const Navbar: FC<{}> = ({}) => {
    const [changeNavbar, setNavbar] = useState(false)
    const [mobNavbar, setMobNavbar] = useState(false)
    const [showOptions, setShowOptions] = useState(false)
    const activeRef = useRef<any | null>(null)
    const [activeOffsetWidth, setActiveOffsetWidth] = useState<string>('')
    const [activeOffsetLeft, setActiveOffsetLeft] = useState<string>('')
    const { user, photoURL, displayName, signIn, logout, loading } = useAuth()

    useEffect(() => {
        if (activeRef.current) {
            setActiveOffsetWidth(activeRef.current.offsetWidth.toString())
            setActiveOffsetLeft(activeRef.current.offsetLeft.toString())
        }
    }, [router, activeRef, activeRef.current?.offsetWidth])

    const mobileNavbarHandler = (action: any) => {
        setMobNavbar(action)
    }

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    }, [])

    return (
        <div
            className={`sticky z-50 ${
                changeNavbar
                    ? 'bg-black/30 shadow-md'
                    : 'shadow-none bg-transparent'
            } col-span-6 top-0 flex justify-between items-center h-[4rem] p-2 px-5 w-full border-0`}
        >
            <Link href={'/'}>
                <Logo />
            </Link>
            <MobileNavbar
                showMobNavbar={mobNavbar}
                mobNavbarHandler={mobileNavbarHandler}
            />
            <div className="md:flex hidden font-semibold text-white items-center space-x-8">
                <Link href={'/team'}>
                    <span className="cursor-pointer">Team</span>
                </Link>
                <Link href={'#about'}>
                    <span className="cursor-pointer">Events</span>
                </Link>

                {user ? (
                    <div
                        onClick={() => setShowOptions(!showOptions)}
                        className="rounded-full bg-blue-300 cursor-pointer flex space-x-2 items-center pl-2 pr-3 py-2"
                    >
                        {/* <Image
                            className="rounded-full"
                            src={photoURL}
                            alt="user Image"
                            width={40}
                            height={40}
                        /> */}

                        <span className="font-semibold text-black  hover:bg-black/10">
                            {displayName}
                        </span>
                        <BsThreeDotsVertical className="h-5 w-5 text-primary" />
                        {showOptions && (
                            <div
                                onClick={logout}
                                className="absolute top-[5.5rem] right-2 z-50  text-black bg-blue-300 py-2 rounded-xl flex flex-col items-center justify-center"
                            >
                                <div className="px-5 py-3 cursor-pointer group hover:bg-black/10 flex space-x-2 items-center justify-between">
                                    <p className="font-semibold ">Logout</p>
                                    <FiLogOut className="h-5 w-5 text-gray-800" />
                                </div>
                                <div className="px-5 py-3 cursor-pointer group hover:bg-black/10 flex space-x-2 items-center justify-between">
                                    <p className=" ">DashBoard</p>
                                    <RxDashboard className="h-5 w-5 text-gray-800" />
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="  rounded-3xl text-white  hover:bg-blue-300">
                        <button
                            disabled={loading}
                            onClick={signIn}
                            className="disabled:cursor-wait rounded-full  cursor-pointer flex space-x-2  py-2 px-3"
                        >
                            <FcGoogle className="h-5 w-5 text-primary" />
                            <span>Login</span>
                        </button>
                    </div>
                )}
            </div>

            <svg
                onClick={() => mobileNavbarHandler(true)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 block md:hidden bg-blue-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
            <span
                style={{
                    width: `${activeOffsetWidth}px`,
                    left: `${activeOffsetLeft}px`,
                    transition: 'all 0.3s',
                }}
                className={`absolute bg-primary left-0 bottom-0 h-[5px] z-[1] rounded-[8px_8px_0_0]`}
            ></span>
        </div>
    )
}
