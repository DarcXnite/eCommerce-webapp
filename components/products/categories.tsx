import React from 'react'
import Chevron from './chevron'
import Link from 'next/link'

export default function Categories() {

    function sortType() {
        //add a parameter of what the use clicked on 
        //filter through the data that was given 
        //look for the type of weapon that the use is looking for 
        //then add that list to a useState and then map through it 
        //displaying it on the page 
    }
    
  return (
    <div className=' h-96 rounded-lg  border-aro-tan-dark border-2 w-52 p-6 m-16 '>
        <h2 className='text-3xl font-bold mx-auto'>Categories</h2>
        <ul className='m-4 w-32'>
            <li className='pb-2 flex'>
                {/* <button onClick={sort}> */}
                <Chevron  />
                    Axes
                {/* </button> */}
                    
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
