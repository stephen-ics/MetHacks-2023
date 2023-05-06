import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { AnimatePresence } from 'framer-motion'

const Blog = require('./models/Model');
const app = express();
 
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'

app.post('/posts', (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);

  blog.save()
    .then(result => {
      res.redirect('/posts');
    })
    .catch(err => {
      console.log(err);
    });
});


function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Suspense fallback={<div>Page Loading...</div>}>
         <Navbar />
         <AnimatePresence
          mode='wait'>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" exact element={<About />} />
            </Routes>
         </AnimatePresence>
       </Suspense>
     </BrowserRouter>
   </div>
 );
}
 
export default App;