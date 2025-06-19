'use client'
import React, { useState } from 'react'
import WelcomeSide from "@/components/welcom/welcomside";
import axios from 'axios';
const page = () => {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    async function signup() {
        try {
            const response = await axios.post("/api", {
                firstname,
                lastname,
                email,
                password,
            }, {
                // headers: {
                //     'Content-Type': 'application/json',
                // },
            })
            alert("signup sucsses");
            console.log(response.data);
        } catch (error) {
            if (error.response) {
                // Backend returned an error response
                if (error.response.status === 409) {
                    setError('Email already exists. Please use a different email.');
                } else if (error.response.data?.message) {
                    setError(error.response.data.message);
                } else {
                    setError('Signup failed. Please try again.');
                }
            } else if (error.request) {
                // The request was made but no response was received
                setError('Network error. Please check your connection.');
            } else {
                // Something happened in setting up the request
                setError('An unexpected error occurred.');
            }
        }

    }
    return (
        <div className='flex gap-65'>
            <WelcomeSide title="welcome back" desc="welcome back to our company" button="Sign up" />
            <form onSubmit={signup} className='mt-20'>
                <div className="flex flex-col gap-6 justify-center items-center">
                    <h1 className='text-[50px] font-bold'>Login</h1>
                    <input type='text' placeholder='firstname' className='border h-10 w-70 pl-2 rounded-[10px]' required value={firstname} onChange={(e) => setFirstname(e.target.value)}></input>
                    <input type='text' placeholder='lastname' className='border h-10 w-70 pl-2 rounded-[10px]' required value={lastname} onChange={(e) => setLastname(e.target.value)}></input>
                    <input type='email' placeholder='email' className='border h-10 w-70 pl-2 rounded-[10px]' required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='password' placeholder='password' className='border h-10 w-70 pl-2 rounded-[10px]' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button type='submit' className='w-30 h-10 rounded-[10px] text-[20px] mt-10 bg-[#57cc99] font-semibold cursor-pointer'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default page

// 'use client'
// import { useState } from 'react'

// export default function Register() {
//     const [form, setForm] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//     })
//     const [message, setMessage] = useState('')

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value })
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         setMessage('')

//         const res = await fetch('/api', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(form),
//         })

//         const data = await res.json()

//         if (res.ok) {
//             setMessage('User registered successfully!')
//             setForm({ firstName: '', lastName: '', email: '', password: '' })
//             console.log(data);
//         } else {
//             setMessage(data.message || 'Something went wrong.')
//         }
//     }

//     return (
//         <div style={{ maxWidth: 400, margin: '2rem auto', padding: 20 }}>
//             <h1>Register</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     name="firstName"
//                     type="text"
//                     placeholder="First Name"
//                     value={form.firstName}
//                     onChange={handleChange}
//                     required
//                 /><br /><br />
//                 <input
//                     name="lastName"
//                     type="text"
//                     placeholder="Last Name"
//                     value={form.lastName}
//                     onChange={handleChange}
//                     required
//                 /><br /><br />
//                 <input
//                     name="email"
//                     type="email"
//                     placeholder="Email"
//                     value={form.email}
//                     onChange={handleChange}
//                     required
//                 /><br /><br />
//                 <input
//                     name="password"
//                     type="password"
//                     placeholder="Password"
//                     value={form.password}
//                     onChange={handleChange}
//                     required
//                 /><br /><br />
//                 <button type="submit">Register</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     )
// }
