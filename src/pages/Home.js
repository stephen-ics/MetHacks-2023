import React from 'react'
import "../index.css"

const Home = () => {
  return (
    <div>
      <h1 className='flex justify-center mt-20 text-7xl' id="title">bulletin</h1>
      <div className='flex flex-col items-center'>
        <div className='pb-20 pt-14 mt-10 px-10 shadow-xl rounded-xl' id="welcome_box">
        <h2 className='text-2xl text-center' id="desc_title">WELCOME TO BULLETIN</h2>
        <p className='text-4xl mt-8 text-center' id="desc_body">We show all your <span id="txt_highlight">saved snippets</span> here ✍️. Try <span id="txt_highlight">filtering</span> by tag 🏷️</p>
        </div>
      </div>
    </div>

  )
}

export default Home