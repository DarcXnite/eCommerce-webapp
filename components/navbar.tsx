import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import logo from '../public/assets/arondight-logo.png'

interface NavbarProps {
  toggleLoginModal?: React.MouseEventHandler<HTMLButtonElement>
}

const userCircle = (
  <svg
    className='icons drop-shadow-lg'
    viewBox='0 0 496 512'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='m248 8c-137 0-248 111-248 248s111 248 248 248 248-111 248-248-111-248-248-248zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9s28-2.7 40.9-6.9c2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8-35.2 41.6-87.8 68.2-146.5 68.2z' />
  </svg>
)

const shoppingCart = (
  <svg
    className='icons'
    viewBox='0 0 576 512'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='m528.12 301.319 47.273-208c3.413-15.018-8.002-29.319-23.403-29.319h-392.782l-9.166-44.81c-2.284-11.169-12.112-19.19-23.513-19.19h-102.529c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435c-16.806 9.665-28.131 27.787-28.131 48.565 0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647c-10.376 10.165-16.823 24.326-16.823 40 0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319h-268.418l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z' />
  </svg>
)

const links = [
  { name: 'Home', href: '/' },
  { name: 'Sales', href: '/sales' },
  { name: 'New Arrivals', href: '/newarrivals' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
]

const Navbar: FC<NavbarProps> = ({ toggleLoginModal }): JSX.Element => {
  const router = useRouter()

  const allLinks = links.map(link => {
    return (
      <Link href={link.href} key={link.name} className='inter drop-shadow'>
        <li
          className={`flex items-center justify-center ${
            router.pathname === link.href ? 'text-aro-green' : ''
          }`}
        >
          {link.name}
        </li>
      </Link>
    )
  })

  return (
    <div className='bg-aro-green'>
      <Image className='logo py-2' src={logo} alt='arondight-logo' />
      <nav className='flex flex-col md:flex-row justify-between bg-aro-tan-dark'>
        <div className='md:w-2/4 my-2'>
          <ul className='flex flex-col md:flex-row items-center justify-center md:justify-around'>
            {allLinks}
          </ul>
        </div>
        <div className='flex justify-around pb-2 md:pb-0 md:mr-5 items-center'>
          <input
            className='rounded-lg bg-white p-0.5 placeholder:text-slate md:mr-5'
            type='text'
            placeholder='Search here...'
          />
          <i className='md:mr-5'>
            <Link href='/account'>{userCircle}</Link>
          </i>
          <i>
            <Link href='/cart'>{shoppingCart}</Link>
          </i>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
