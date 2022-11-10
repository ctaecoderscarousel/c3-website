import Link from 'next/link';
import React, { Dispatch, FC, SetStateAction } from 'react';

export const MobileNavbar: FC<{
    showMobNavbar: boolean
    mobNavbarHandler: Dispatch<SetStateAction<boolean>>
}> = ({ showMobNavbar, mobNavbarHandler }) => {

    return (
        <div className={`${showMobNavbar ? 'scale-y-100' : 'scale-y-0'} origin-top transition-all duration-300 ease-in-out absolute top-0 left-0 right-0 bottom-0 w-full bg-white/90 h-screen flex flex-col`}>
            <svg onClick={() => mobNavbarHandler(false)} xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 absolute top-4 right-4" fill="none" viewBox="0 0 24 24" stroke="#7e22ce">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <div className='pt-28'>
                <div className='flex flex-col justify-between items-center space-y-16'>
                    <Link href={'/team'}>
                        <span className="cursor-pointer">
                            Team
                        </span>
                    </Link>
                    <Link href={'#about'}>
                        <span className="cursor-pointer">
                            Events
                        </span>
                    </Link>
                </div>
            </div>
        </div>)
}
