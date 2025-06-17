'use client'
import React from 'react'

const welcomside = ({title , desc , button}) => {
    return (
        <div>
            <div className="flex flex-col gap-6 w-500 h-300 bg-amber-500">
                <h1 className='text-[50px] text-black'>{title}</h1>
                <p>{desc}</p>
                <button>{button}</button>
            </div>
        </div>
    )
}

export default welcomside