import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';



    // Importing the pages with my stuff in it


import Finder from './pages/finder';
import NewYork from './pages/newYork';
import Boston from './pages/boston';



  
function App() {
return (
    <Router>
    <Navbar />
    
    <Routes>

        {/* routing to my pages */}
        
        <Route path='/finder' element={<Finder/>} />
        <Route path='/newYork' element={<NewYork/>} />
        <Route path='/boston' element={<Boston/>} />
    </Routes>
  

   

    


 
    
    </Router>
);
}
  
export default App;
