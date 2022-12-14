import Link from 'next/link'
import React from 'react'

export default function FeaturedProducts() {
  return (
    <>
      <header className='text-center bg-aro-green'>FEATURED PRODUCTS</header>
      <div className='grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 content-around justify-items-center w-3/4 xl:w-2/3 mx-auto'>
        <Link href='#' className='fItem'></Link>
        <Link href='#' className='fItem'></Link>
        <Link href='#' className='fItem'></Link>
        <Link href='#' className='fItem'></Link>
        <Link href='#' className='fItem'></Link>
        <Link href='#' className='fItem'></Link>
      </div>
    </>
  )
}
