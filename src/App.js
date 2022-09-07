import React from "react";
import TopBar from "./component/topbar/TopBar";
import Createlisting from "./pages/creat-listing/Createlisting";
import Home from "./pages/homepage/Home";
import Detail from "./pages/listingdetail/Detail";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./component/sidebar/Sidebar";
import Footer from "./component/footer/footer";

function App() {
  return (
    <>
  <Router>
    <div>
      <TopBar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/detail' element={<Detail />} />
        <Route exact path='/create' element={<Createlisting />} />
        <Route exact path='/about' element={<Sidebar />} /> 
        <Route exact path='/contact' element={<Footer />} />          
      </Routes>  
    </div>
  </Router>
  </>
    );
}

export default App;
