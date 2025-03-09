import React from 'react'

const AboutUs = () => {
  return (
    <div className='container mx-auto mt-12'>
      <div className='text-center'>
        <h1>recent update</h1>
        <h1 className='text-5xl'>feature stories</h1>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='bg-cyan-400 rounded-2xl text-center hover:shadow-2xl'>
          <img className='mt-4 w-full h-60'src="https://picsum.photos/200" alt="" />
          <h1 className='text-2xl text-emerald-400 mt-4' >google rank</h1>
          <p className='font-thin my-4'>kjfdhjbfhjefibvhefbhvbfehqgycahbhgfvgvuy4</p>
          <a href="" className='text-indigo-500 font-bold hover:text-black'>Read more</a>
        </div>
        <div className='bg-cyan-400 rounded-2xl text-center hover:shadow-2xl'>
          <img  className='mt-4 w-full h-60' src="https://picsum.photos/200" alt="" />
          <h1 className='text-2xl text-emerald-400 mt-4'>google rank</h1>
          <p className='font-thin my-4'>kjfdhjbfhjefibvhefbhvbfehqgycahbhgfvgvuy4</p>
          <a href="" className='text-indigo-500 font-bold hover:text-black'>Read more</a>

        </div>
        <div className='bg-cyan-400 rounded-2xl text-center hover:shadow-2xl'>
          <img  className='mt-4 w-full h-60'src="https://picsum.photos/200" alt="" />
          <h1 className='text-2xl text-emerald-400 mt-4'>google rank</h1>
          <p className='font-thin my-4'>kjfdhjbfhjefibvhefbhvbfehqgycahbhgfvgvuy4</p>
          <a href="" className='text-indigo-500 font-bold hover:text-black'>Read more</a>

        </div>
      </div>
    </div>
  )
}

export default AboutUs