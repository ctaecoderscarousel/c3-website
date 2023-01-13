import { NextPage } from 'next'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'

const Profile: NextPage<{}> = ({}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [year, setYear] = useState('')
    const [branch, setBranch] = useState('')
    return (
       
            <div className="p-8 min-h-full flex flex-col col-span-6 justify-center space-y-3 item-center">
                <h1 className="text-3xl bg-clip-text bg-gradient-to-r  from-primary-light  via-primary to-secondary  text-transparent text-center font-bold   ">
                    Profile
                </h1>
                <FaUserCircle className="h-10 w-10 mx-auto  " />
                <div className="flex flex-col flex-wrap justify-center items-center  ">
                    <form className=" text-md flex flex-col space-y-2 ">
                        <label className="text-lg">Name</label>
                        <input
                            className="border-2 bg-sky-50 border-sky-700 hover:bg-white rounded-md p-2 w-80 "
                            type="text"
                            placeholder="Enter your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label className="text-lg">Email</label>
                        <input
                            className="border-2 bg-sky-50 border-sky-700 rounded-md p-2 hover:bg-white w-80 "
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="text-lg">Year</label>
                        <input
                            className="border-2 bg-sky-50 border-sky-700 rounded-md p-2 hover:bg-white w-80"
                            type="text"
                            placeholder="Enter your Year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                        <label className="text-lg">Branch</label>
                        <input
                            className="border-2 bg-sky-50 border-sky-700 rounded-md p-2 hover:bg-white w-80"
                            type="text"
                            placeholder="Enter your Branch"
                            value={branch}
                            onChange={(e) => setBranch(e.target.value)}
                        />
                    </form>
                    <span>Sub-Club Name</span>
                </div>
            </div>
       
    )
}
export default Profile
