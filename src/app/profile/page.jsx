'use client'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const page = () => {
    // const user = localStorage.getItem("responsedata");
    // const user = JSON.parse(localStorage.getItem("responsedata"));
    const [user, setUser] = useState(null)

    useEffect(() => {
        const stored = localStorage.getItem('responsedata')
        if (stored) {
            setUser(JSON.parse(stored))
        }
    }, [])
    console.log(user?.token)
    async function userinfo() {
        try {
            const response = await axios.get("/api/userinfo", {
                headers: {
                    'Authorization': `Bearer ${user?.token}`,
                }
            })
            alert("get info success");
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            profile page
            <button onClick={userinfo} className='w-30 h-10 border '>Get user id</button>
        </div>
    )
}

export default page