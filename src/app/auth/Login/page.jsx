'use client'
import React, { useState } from 'react'
import WelcomeSide from "@/components/welcom/welcomside";
import axios from 'axios';
import { Router, useRouter } from 'next/router';
import { redirect } from 'next/dist/server/api-utils';
const page = () => {
    // const router = useRouter();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    async function signin(e) {
        e.preventDefault();
        try {
            const response = await axios.post("/api/loginauth", {
                email,
                password,
            });
            alert("signin sucsses");
            console.log(response.data);
            localStorage.setItem("responsedata", JSON.stringify(response.data));
            redirect("/profile");
            Router("/profile")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='flex gap-65'>
            <WelcomeSide title="welcome back" desc="welcome back to our company" button="Sign up" />
            <form onSubmit={signin} className='mt-20'>
                <div className="flex flex-col gap-6 justify-center items-center">
                    <h1 className='text-[50px] font-bold'>Login</h1>
                    <input type='email'
                        placeholder='email'
                        className='border h-10 w-70 pl-2 rounded-[10px]'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type='password'
                        placeholder='password'
                        className='border h-10 w-70 pl-2 rounded-[10px]'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit' 
                    className='w-30 h-10 rounded-[10px] text-[20px] mt-10 bg-[#57cc99] font-semibold cursor-pointer'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default page