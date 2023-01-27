import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';


import Finder from './pages/finder';
import NewYork from './pages/newYork';
import Boston from './pages/boston';



  
function App() {
return (
    <Router>
    <Navbar />
    
    <Routes>
        
        <Route path='/finder' element={<Finder/>} />
        <Route path='/newYork' element={<NewYork/>} />
        <Route path='/boston' element={<Boston/>} />
    </Routes>
  

   

    


 
    
    </Router>
);
}
  
export default App;
