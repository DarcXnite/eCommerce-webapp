import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Cards() {
  return (
    <>
    <Link href=''>
      <div className='h-64 rounded-lg border-slate-300 border-2 w-52 p-1 m-16'>
          
            <Image className='mt-7 mb-4 h-auto' src='/../public/assets/dagger.jpg' alt='dagger picture' height={480} width={300}/>
          
          <h3 className='text-center'>Zweihander</h3>
          <p className='text-center'>$50.00</p>
      </div>
    
    </Link>
    
    </>
  )
}