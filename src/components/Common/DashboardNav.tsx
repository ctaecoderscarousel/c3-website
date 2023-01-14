
import { FC } from "react"
import {FaUserCircle} from 'react-icons/fa'
import {IoIosPeople} from 'react-icons/io'
import Link from "next/link"
import {AiFillHome} from 'react-icons/ai'
import {GiNotebook} from 'react-icons/gi'
import { useRouter } from "next/router"


 const DashboardNav: FC<{}> = ({}) => {
    const router = useRouter();
   
    return (
      <div className=' w-32  md:w-52 h-screen bg-white z-30 '>

        {/* <h1>{router.pathname}</h1> */}
       
    <div className="  w-32 pt-3  md:w-52 bg-primary-700 justify-center h-screen  space-y-3">
     <Link href="/home" >
      <button className="hover:bg-sky-300  pt-2 p-0 w-full " >
    <div className="flex pt-3">
    <AiFillHome className="h-5 md:h-9  fill-white w-6  justify-center "/>
     <h1 className="text-xs  md:text-2xl pl-2 text-white justify-center">Home</h1>
     
     </div>
     </button>
     </Link>
     <br/>
     <br/>
   <Link href={'/members'}>
     <button className="hover:bg-sky-300  pt-2 p-0 w-full ">
     <div className="flex">
       <IoIosPeople className="h-5 md:h-9  fill-white w-6 justify-center "/>
      <h1 className="text-xs md:text-2xl pl-2 text-white justify-center">Members</h1>
      </div>
      </button>
      </Link>
      <br/>
     <br/>
     <Link href={'/assignments'}>
      <button className="hover:bg-sky-300  pt-2 p-0 w-full ">
      <div className="flex">
      <GiNotebook className="h-5 md:h-9 fill-white w-6 justify-center "/>
      <h1 className="text-xs  md:text-2xl pl-2 text-white justify-center">Assignments</h1>
      </div>
      </button>
      </Link>
      <br/>
     <br/>
     <Link href={'dashboard/profile'}>
      <button className="hover:bg-sky-300  pt-2 p-0 w-full ">
      <div className="flex">
      <FaUserCircle className="h-5 md:h-9 fill-white w-6 justify-center"/>
      <h1 className="text-xs  md:text-2xl pl-2 text-white">Profile</h1>
      </div>
      </button>
      </Link>
 </div>

 </div>

      )
    }
    export default DashboardNav





