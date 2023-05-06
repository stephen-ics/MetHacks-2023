import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='flex justify-center mt-32 text-8xl'>Bulletin</h1>
      <div className='flex flex-col items-center'>
        <div className='pb-20 pt-16 mt-20 px-10 shadow-2xl rounded-2xl'>
        <h2 className='text-4xl text-center'>Welcome to the Bulletin</h2>
        <p className='text-6xl mt-20 text-center'>We show all your saved snippets here. Try Filtering by Tag.</p>
        </div>
      </div>

    </div>
  )
}

export default Home