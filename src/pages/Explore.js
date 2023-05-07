import React from 'react'
import "./explorestyle.css"
import Tags from '../components/Tags'


const Home = () => {
  return (
    <div>
      <h1 className='flex justify-center mt-20 text-7xl' id="title">explore</h1>
      <div className='flex flex-col items-center'>
        <div className='pb-20 pt-14 mt-10 px-10 shadow-xl rounded-xl' id="welcome_box">
        <h2 className='text-2xl text-center' id="desc_title">WELCOME TO EXPLORE</h2>
        <p className='text-4xl mt-8 text-center' id="desc_body">Discover some <span id="txt_highlight">snippets ✂️</span> and <span id="txt_highlight">servers</span> from like minded people</p>
        </div>
      </div>
      <div className='topics'>
        <div className='text-2xl ml-20 mt-8' id="topics_desc">
          <h2>Topics you have <br></br> indicated interest in:</h2>
        </div>
        <div>
          <Tags ></Tags>
        </div>
      </div>
    </div>

  )
}

const randColor = () => {
  const min = -1
  const max = 1

  let difference = max-min
  let rand = Math.random()
  rand = Math.floor(rand * difference)
  rand = rand + min;
  return rand;
}

export default Home