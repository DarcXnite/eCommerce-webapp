import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductLinks() {
  return (
    <div className='img-container'>
      <div className='img-gallery'>
        <Link href='#' className='item1 item'></Link>
        <Link href='#' className='item2 item'></Link>
        <Link href='#' className='item3 item'></Link>
        <Link href='#' className='item4 item'></Link>
        <Link href='#' className='item5 item'></Link>
        <Link href='#' className='item6 item'></Link>
      </div>
    </div>
  )
}
