import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState, useRef } from 'react'
import { Logo } from './Logo'
import { MobileNavbar } from './MobileNavbar'
import { useAuth } from '../../context/auth'
import Image from 'next/image'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { RxDashboard } from 'react-icons/rx'
import { FiLogOut } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
export const Navbar: FC<{}> = ({}) => {
    const [changeNavbar, setNavbar] = useState(false)
    const [mobNavbar, setMobNavbar] = useState(false)
    const [showOptions, setShowOptions] = useState(false)
    const activeRef = useRef<any | null>(null)
    const [activeOffsetWidth, setActiveOffsetWidth] = useState<string>('')
    const [activeOffsetLeft, setActiveOffsetLeft] = useState<string>('')
    const { user, photoURL, displayName, login, logout, loading } = useAuth()

    useEffect(() => {
        if (activeRef.current) {
            setActiveOffsetWidth(activeRef.current.offsetWidth.toString())
            setActiveOffsetLeft(activeRef.current.offsetLeft.toString())
        }
    }, [activeRef, activeRef.current?.offsetWidth])

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
    const router = useRouter()

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    }, [])

    return (
        <div
            className={` sticky z-50 ${
                changeNavbar
                    ? 'bg-black/30 shadow-md'
                    : 'shadow-none bg-transparent'
            } col-span-6 top-0 flex justify-between items-center h-[4rem] p-2 px-5 w-full border-0 `}
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
                        className="rounded-full bg-white cursor-pointer flex space-x-2 items-center pl-2 pr-3 py-1"
                    >
                        <Image
                            className="rounded-full"
                            src={photoURL}
                            width={40}
                            height={40}
                            alt="user"
                        />
                        <span className="font-semibold text-tertiary">
                            {displayName}
                        </span>
                        <BsThreeDotsVertical className="h-6 w-6 text-primary" />
                        {showOptions && (
                            <div
                                onClick={logout}
                                className="absolute text-tertiary top-[4rem] z-50 bg-white py-2 rounded-xl flex flex-col items-center justify-center"
                            >
                                <div
                                    onClick={() => router.push('/dashboard')}
                                    className="px-5 py-3 cursor-pointer group hover:bg-black/10 w-full flex space-x-2 items-center justify-between"
                                >
                                    <p className="font-semibold ">Dashboard</p>
                                    <RxDashboard className="h-6 w-6 text-gray-800" />
                                </div>
                                <div className="px-5 py-3 cursor-pointer group hover:bg-black/10 w-full flex space-x-2 items-center justify-between">
                                    <p className="font-semibold ">Logout</p>
                                    <FiLogOut className="h-6 w-6 text-gray-800" />
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        disabled={loading}
                        onClick={login}
                        className="disabled:cursor-wait rounded-full bg-white cursor-pointer flex space-x-2 items-center py-2 px-3"
                    >
                        <FcGoogle className="h-7 w-7 text-primary" />
                        <span className="font-semibold text-tertiary">
                            Login
                        </span>
                    </button>
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
