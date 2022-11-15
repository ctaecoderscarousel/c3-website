import Image from "next/image";
import { FC } from "react";

export const Logo: FC<{}> = ({}) => {
  return (
    <Image
      src={
        "https://res.cloudinary.com/dli15zk4p/image/upload/v1668146056/c3-website/logo%20and%20icons/c3_icon_without_bg_4x_kromg7.png"
      }
      height={110}
      width={110}
      alt="Logo"
    />
  );
};
