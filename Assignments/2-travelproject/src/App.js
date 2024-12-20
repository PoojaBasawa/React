import React from "react";
import Header from './TravelProject/Header';
import Nav from './TravelProject/Nav';
import Aside from './TravelProject/Aside';
import Main from './TravelProject/Main';
import Footer from './TravelProject/Footer';

function App() {
  return(
    <>
      <Header/>
      <Nav/>
      <div style={{display:"flex",gap:"20px"}}>
        <Aside/>
        <Main/>
      </div>
      <Footer/>
    </>
  );
}

export default App;