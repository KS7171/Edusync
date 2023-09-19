import React from 'react';
import  Header from './Components/Header';
import  HomeBanner from './Components/HomeBanner';
import  Service from './Components/Service';
import  Course from './Components/Course';
import Footer from './Components/Footer';
// import Carasouel from './Components/carasouel';
import Filter from './Components/filter';
import MultiFilter from "./Components/MultiFilters";
// import "./Components/assets/js/jquery.sticky.js"
import './App.css';
function App() {
  // const [popular, setPopular]= useState([]);
  // const [filterered, setFiltered]= useState([]);
  // const [activeGenre,setActiveGenre]= useState(0);
  return (
    <div>
      <Header id="content" class="site-main"/>
      <HomeBanner/>
      {/* <Carasouel/> */}
      {/* <Filter/> */}
      <MultiFilter/>
      {/* <Service/> */}
      <Course/>
      <Footer/>
    </div>
  );
}

export default App;
