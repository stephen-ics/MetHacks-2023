import React from 'react'
import "../index.css"
import Movable from '../components/Movable'


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
      <div className='flex justify-around'>
        <div className='grid grid-cols-3 gap-36 mx-20 mt-16'>
          <Movable style={{backgroundColor:'color name here '}} labe='mathematics' snippet='blah blah blah very cool quote trigonometry' date='2023' note='be careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometbe careful on trigonometry!'></Movable>
          <Movable style={{backgroundColor:'color name here '}} labe='mathematics' snippet='blah blah blah very cool quote trigonometry' date='2023' note='be careful on Calculus!'></Movable>
          <Movable style={{backgroundColor:'color name here '}} labe='mathematics' snippet='blah blah blah very cool quote trigonometry' date='2023' note='be careful on trigonometry!'></Movable>
          <Movable style={{backgroundColor:'color name here '}} labe='mathematics' snippet='blah blah blah very cool quote trigonometry' date='2023' note='be careful on trigonometry!'></Movable>
          <Movable style={{backgroundColor:'color name here '}} labe='mathematics' snippet='blah blah blah very cool quote trigonometry' date='2023' note='be careful on trigonometry!'></Movable>
          <Movable style={{backgroundColor:'color name here '}} labe='mathematics' snippet='blah blah blah very cool quote trigonometry' date='2023' note='be careful on trigonometry!'></Movable>
          <Movable style={{backgroundColor:'color name here '}} labe='mathematics' snippet='blah blah blah very cool quote trigonometry' date='2023' note='be careful on trigonometry!'></Movable>
          <Movable style={{backgroundColor:'color name here '}} labe='mathematics' snippet='blah blah blah very cool quote trigonometry' date='2023' note='be careful on trigonometry!'></Movable>
          <Movable style={{backgroundColor:'color name here '}} labe='mathematics' snippet='blah blah blah very cool quote trigonometry' date='2023' note='be careful on trigonometry!'></Movable>
          <Movable style={{backgroundColor:'color name here '}} labe='mathematics' snippet='blah blah blah very cool quote trigonometry' date='2023' note='be careful on trigonometry!'></Movable>
          <Movable style={{backgroundColor:'color name here '}} labe='mathematics' snippet='blah blah blah very cool quote trigonometry' date='2023' note='be careful on trigonometry!'></Movable>
          <Movable style={{backgroundColor:'color name here '}} labe='mathematics' snippet='blah blah blah very cool quote trigonometry' date='2023' note='be careful on trigonometry!'></Movable>
          <Movable style={{backgroundColor:'color name here '}} labe='mathematics' snippet='blah blah blah very cool quote trigonometry' date='2023' note='be careful on trigonometry!'></Movable>
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