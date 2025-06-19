'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const Welcomside = ({title , desc , button}) => {
    const router = useRouter()
    const changepage  = () =>{
        if (button === "Sign in"){
            router.push("/auth/Login");
        }else if (button === "Sign up"){
            router.push("/auth/Register");
        }
    }
    return (
        <div>
            <div className="flex flex-col gap-6  w-120 h-screen bg-[#c7f9cc]  justify-center items-center rounded-tr-[50px] rounded-br-[50px]">
                <h1 className='text-[50px] text-[#38a3a5] font-bold text-center '>{title}!</h1>
                <p className='text-[20px] font-semibold text-center'>{desc}</p>
                <button onClick={changepage} className=' absolute top-[80%] border-[#d3d3d3] bg-[#57cc99] text-black text-[20px] px-4 py-1 rounded-[10px] font-semibold cursor-pointer'>{button}</button>
            </div>
        </div>
    )
}

export default Welcomside