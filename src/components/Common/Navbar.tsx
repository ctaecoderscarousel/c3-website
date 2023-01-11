import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Logo } from './Logo'
import { MobileNavbar } from './MobileNavbar'
import { useAuth } from '../../context/auth'

export const Navbar: FC<{}> = ({}) => {
    const [changeNavbar, setNavbar] = useState(false)
    const [mobNavbar, setMobNavbar] = useState(false)
    const { signIn } = useAuth()

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
                <button
                    onClick={async () => {
                        await signIn()
                    }}
                    className="flex"
                >
                    <FcGoogle className="m-2" />
                    <span className="m-1">LogIn</span>
                </button>
            </div>
            <svg
                onClick={() => mobileNavbarHandler(true)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 block md:hidden text-white"
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
        </div>
    )
}
