import Image from 'next/image'
import React from 'react'

import logo from '../public/assets/arondight-logo.png'

const links = [
  { name: 'Home' },
  { name: 'Sales' },
  { name: 'New Arrivals' },
  { name: 'About Us' },
  { name: 'Contact Us' },
]

export default function Navbar() {
  const allLinks = links.map(link => {
    return (
      <li className='inter drop-shadow'>
        <a href='#'>{link.name}</a>
      </li>
    )
  })

  return (
    <nav className='bg-aro-green'>
      <Image className='logo' src={logo} alt='axe' />
      <ul className='flex justify-around bg-aro-tan-dark'>{allLinks}</ul>
    </nav>
  )
}
