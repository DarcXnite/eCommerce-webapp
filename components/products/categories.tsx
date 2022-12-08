import React from 'react'
import Chevron from './chevron'

export default function Categories() {
  return (
    <div className='h-96 rounded-lg border-aro-tan-dark border-2 w-52 p-6 m-16 '>
        <h2 className='text-3xl font-bold mx-auto'>Categories</h2>
        <ul className='m-4 w-32'>
            <li className='pb-2 flex'>
                <Chevron  />
                Axes
            </li>

            <li className='pb-2 flex'> 
                <Chevron  />
                Daggers
            </li>

            <li className='pb-2 flex'>
                <Chevron  />
                Maces
            </li>

            <li className='pb-2 flex'>
                <Chevron  />
                Swords
            </li>

            <li className='pb-2 flex'>
                <Chevron  />
                Spears
            </li>

            <li className='flex'>
                <Chevron  />
                War Hammers
            </li>
        </ul>
    </div>
  )
}
