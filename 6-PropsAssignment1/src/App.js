import React from 'react'
import Header from './ReactProps/Header';
import Footer from './ReactProps/Footer';
import Cards from './ReactProps/Cards';
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <section className="app">
        <Cards image="./Images/Virat.jpg" 
        name="Virat Kholi"/>
        <Cards image="./Images/Rohit.jpg" 
        name="Rohit"/>
        <Cards image="./Images/Raina.jpg" 
        name="Raina"/>
        <Cards image="./Images/Hartik.jpg" 
        name="Virat Kholi"/>
      </section>
      <Footer/>
    </>
  );
}

export default App;