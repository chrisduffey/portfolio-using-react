import React, { useState } from 'react'
import { HiBars4, HiXMark } from "react-icons/hi2";
import MenuOverlay from './MenuOverlay';

function Header() {
    const [toggle, setToggle]=useState(false)
    const menuList= [
        {
            id:1, 
            title: 'HOME'
        },
        {
            id:1, 
            title: 'ABOUT'
        },
        {
            id:1, 
            title: 'SERVICE'
        },
        {
            id:1, 
            title: 'PORTFOLIO'
        },
        {
            id:1, 
            title: 'CONCTACT'
        },
        
    ]

  return (
    <div className='flex items-center justify-between'>
        <div>
        <h2 className='text-[24px] font-bold text-blue '>Chris <span className='text-red-500'>Duffey</span></h2>
        </div>
        <div className='hidden md:flex gap-4'>
            {menuList.map((item)=> (
                <div>
                    <h2 className='text-white 
                    hover: border-[1px] border-blue-500 rounded-full text-[15px] px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-blue-500 to-blue-800'>{item.title}</h2>
                </div>
            ))}
            <h2 className='text-white 
                    hover: border-[1px] border-blue-500 rounded-full text-[15px] px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-red-500 to-red-800'>Hire Me</h2>
        </div>
        <div className='md:hidden'>
        {!toggle? <HiBars4 onClick={()=>setToggle(!toggle)} className='text-black text-[22px]'/>
        :<HiXMark onClick={()=>setToggle(!toggle)}  className='text-black text-[22px]'/>}
        {toggle?<MenuOverlay menuList={menuList}/>: null}
        </div>
    </div>
    
    
    
  )
}

export default Header