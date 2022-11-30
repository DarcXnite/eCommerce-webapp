import Image from 'next/image'
import React from 'react'
import styles from './styles/Navbar.module.css'

import axe from '../public/assets/axe.jpg'

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
      <li>
        <a href='#'>{link.name}</a>
      </li>
    )
  })

  return (
    <nav className='bg-aro-green'>
      <Image className={styles.axeImg} src={axe} alt='axe' />
      <ul className='flex justify-between'>{allLinks}</ul>
    </nav>
  )
}
