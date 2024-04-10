import React from 'react'
import { FaBell } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";
import { RxReload } from "react-icons/rx";






const Header = () => {
  return (
    <div className='flex bg-white justify-end gap-[15px] text-[12px] py-[10px]'> 
        <button className='bg-slate-300 rounded-md p-[3px] px-[10px] flex items-center gap-1'><AiFillThunderbolt />Quick Access</button>
        <div className='flex gap-[15px]'> 
        <div className='flex items-center text-slate-600 text-[14px] gap-[5px]'> 
        <IoWallet />
        <p> ₹213.79 </p>
        <button className='cursor-pointer'>
        <RxReload />
        </button>

        </div>
        <button className='bg-purple-100 p-[5px] px-[10px] rounded-md'>Recharge Wallet</button>
        </div>
        <div className='flex items-center text-slate-600 mx-2 gap-[10px] ' >
            <div className='relative'>
            <button className='text-[16px]'><FaBell /></button>
            <div className='absolute w-[15px] h-[15px] bg-red-950 top-[-8px] left-[5px] rounded-[50%] flex items-center justify-center text-white'>1</div>
            </div>
            <button className='text-[20px]'><CgMenuGridO /></button>

            <div className='flex items-center'>
            <FaUser  className='text-[16px]'/>
            <select name="" id="" className=''>
                <option value=""></option> 
            </select>
            </div>
        </div> 

    </div>
  )
}

export default Header;
