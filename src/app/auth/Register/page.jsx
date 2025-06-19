'use client'
import React, { useState } from 'react'
import WelcomeSide from "@/components/welcom/welcomside";
import axios from 'axios';
const page = () => {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    })
    async function signup(e) {
        e.preventDefault();
        try {
            const response = await axios.post("/api", {
                firstName: firstname,
                lastName: lastname,
                email,
                password,
            });
            alert("signup sucsses");
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='flex gap-65'>
            <WelcomeSide title="welcome to our company" desc="register in our company to get our features" button="Sign in" />
            <form onSubmit={signup} className='mt-20'>
                <div className="flex flex-col gap-6 justify-center items-center">
                    <h1 className='text-[50px] font-bold'>Sign up</h1>
                    <input type='text' placeholder='firstname' className='border h-10 w-70 pl-2 rounded-[10px]' required value={firstname} onChange={(e) => setFirstname(e.target.value)}></input>
                    <input type='text' placeholder='lastname' className='border h-10 w-70 pl-2 rounded-[10px]' required value={lastname} onChange={(e) => setLastname(e.target.value)}></input>
                    <input type='email' placeholder='email' className='border h-10 w-70 pl-2 rounded-[10px]' required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='password' placeholder='password' className='border h-10 w-70 pl-2 rounded-[10px]' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button type='submit' className='w-30 h-10 rounded-[10px] text-[20px] mt-10 bg-[#57cc99] font-semibold cursor-pointer'>Sign up</button>
                </div>
            </form>
        </div>
    )
}

export default page