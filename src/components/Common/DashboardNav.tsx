
import { FC } from "react"
import {FaUserCircle} from 'react-icons/fa'
import {IoIosPeople} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {GiNotebook} from 'react-icons/gi'
import { useRouter } from "next/router"


 const DashboardNav: FC<{}> = ({}) => {
    const router = useRouter();
   
    return (
      <div className=' p-0 w-3/4 h-72 pt-3 bg-white z-30 fixed-top-0 -left-72 lg:w-60 lg:left-0 peer-focus:left-0 per:transition ease-out delay-150 duration-200'>

        {/* <h1>{router.pathname}</h1> */}
    <div className="p-3 justify-center h-screen space-y-3">
    <AiFillHome className="h-6 w-6 mr-20 justify-center "/>
     <h1 className="text-xs justify-center">Home</h1>
       <IoIosPeople className="h-6 w-6 justify-center "/>
      <h1 className="text-xs justify-center">Members</h1>
      <GiNotebook className="h-6 w-6 justify-center "/>
      <h1 className="text-xs justify-center">Assignments</h1>
      <FaUserCircle className="h-6 w-6 justify-center"/>
      <h1 className="text-xs">Profile</h1>
     
 </div>
 {/* <div className="p-8 justify-center h-screen space-y-3">
     
     <CiSettings className="h-10 w-10 mr-20 mt-30"/>
     <h1 className="text-xl">Settings</h1>
</div> */}
 </div>

      )
    }
    export default DashboardNav





