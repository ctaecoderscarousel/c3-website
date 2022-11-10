import Link from "next/link";
import { FC } from "react";
import { Logo } from "./Logo";

export const Navbar: FC<{}> = ({

}) => {
    return (
        <div className="flex flex-row w-full justify-between items-center p-2 col-span-6">
            <Logo />
            <div className="flex font-semibold items-center space-x-2">
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
    )
}