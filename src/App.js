import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Explore from './pages/Explore'
import Create from './pages/Create'


const Blog = require('./models/Model');

function App() {
 return (
   <div className="App">
     <BrowserRouter>
      
       <Suspense fallback={<div>Page Loading...</div>}>
         <AnimatePresence
          mode='wait'>

            <Navbar />

            <Routes>
              
              <Route path="/" exact element={<Home />} />
              <Route path="/explore" exact element={<Explore />} />
              <Route path="/create" exact element={<Create />} />
            </Routes>
         </AnimatePresence>
       </Suspense>
     </BrowserRouter>
   </div>
 );
}
 
export default App;