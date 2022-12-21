import React from 'react'
import Navbar from '../components/navbar'
import type { NextPage } from 'next'

const SingleProduct: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className='flex m-40 justify-around'>
        <div className='h-[34rem] rounded-lg border-slate-300 border-2 w-[42rem]'>
          <img src='/assets/cutlass.jpg' alt='cutlass' />
        </div>
        <div>
          <div className='flex flex-row justify-center align justify-between border-4 border-white border-b-inherit '>
            <h1 className='font-bold text-6xl mr-48 mb-4'>
              Caribbean Pirate Cutlass
            </h1>
            <h3 className='font-bold text-5xl'>$50</h3>
          </div>
          <h3 className='font-medium text-2xl mt-4 ml-4'>Description</h3>
          <p className='w-[48rem] ml-8 mt-2'>
            Although also used on land, the cutlass is best known as the
            sailor's weapon of choice. A naval side-arm, its popularity was
            likely because it was not only robust enough to hack through heavy
            ropes, canvas, and wood, but short enough to use in relatively close
            quarters, such as during boarding actions, in the rigging, or below
            decks. Another advantage to the cutlass was its simplicity of use.
            Employing it effectively required less training than that required
            to master a rapier or small sword, and it was more effective as a
            close-combat weapon than a full-sized sword would be on a cramped
            ship. Cutlasses are famous for being used by pirates, although there
            is no reason to believe that Caribbean buccaneers invented them, as
            has occasionally been claimed. However, the subsequent use of
            cutlasses by pirates is well documented in contemporary sources,
            notably by the pirate crews of William Fly, William Kidd, and Stede
            Bonnet. French historian Alexandre Exquemelin reports the buccaneer
            François lOllonais using a cutlass as early as 1667. Pirates used
            these weapons for intimidation as much as for combat, often needing
            no more than to grip their hilts to induce a crew to surrender, or
            beating captives with the flat of the blade to force their
            compliance or responsiveness to interrogation
          </p>
          <div className='text-center mt-5'>
            <button className='bg-aro-tan-dark font-bold text-white rounded-lg p-4 w-96'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
