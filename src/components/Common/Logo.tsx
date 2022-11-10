import Image from "next/image";
import { FC } from "react";

export const Logo: FC<{}> = ({ }) => {
    return (
        <Image
            src={"https://res.cloudinary.com/dli15zk4p/image/upload/v1668113897/c3-website/c3_without_bg_4x_wsnuxp.png"}
            height={80}
            width={80}
            alt="Logo"
        />
    )
}