import React from 'react'

const Home = () => {
  return (
    <div>
        <form action="/posts" method="POST">
          <label for="title">Blog title:</label>
          <input type="text" id="title" name="title" required></input>
          <label for="snippet">Blog snippet:</label>
          <input type="text" id="snippet" name="snippet" required></input>
          <label for="body">Blog body:</label>
          <textarea id="body" name="body" required></textarea>
          <button>Submit</button>
      </form>


    </div>
  )
}

export default Home