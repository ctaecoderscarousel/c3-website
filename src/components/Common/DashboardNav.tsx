
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
      <div className='p-0 w-32 h-screen bg-white z-30 '>

        {/* <h1>{router.pathname}</h1> */}
       
    <div className="p-3 w-full justify-center w-32 h-screen  space-y-3">
     <Link href="/home">
      <button className="hover:bg-blue-400" w-full>
    <div className="flex">
    <AiFillHome className="h-6  w-6  justify-center "/>
     <h1 className="text-xs justify-center">Home</h1>
     
     </div>
     </button>
     </Link>
     <br/>
     <br/>
   <Link href={'/members'}>
     <button>
     <div className="flex">
       <IoIosPeople className="h-6 fill-white w-6 justify-center "/>
      <h1 className="text-xs text-white justify-center">Members</h1>
      </div>
      </button>
      </Link>
      <br/>
     <br/>
     <Link href={'/assignments'}>
      <button>
      <div className="flex">
      <GiNotebook className="h-6 fill-white w-6 justify-center "/>
      <h1 className="text-xs text-white justify-center">Assignments</h1>
      </div>
      </button>
      </Link>
      <br/>
     <br/>
     <Link href={'dashboard/profile'}>
      <button>
      <div className="flex">
      <FaUserCircle className="h-6 fill-white w-6 justify-center"/>
      <h1 className="text-xs text-white">Profile</h1>
      </div>
      </button>
      </Link>
 </div>

 </div>

      )
    }
    export default DashboardNav





