import Navbar from "./components/Navbar";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/pages/Home';
import Programme from './components/pages/Programme';
import Itineraires_Hebergements from './components/pages/Itineraires_Hebergements';
import A_faire_dans_la_region from './components/pages/A_faire_dans_la_region';
import RSVP from './components/pages/RSVP';
import Photos_Videos from './components/pages/Photos_Videos';
import Liste_de_mariage from './components/pages/Liste_de_mariage';
import Footer from './components/Footer';

function App() {
  return (
    <>

      <Router>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Programme' element={<Programme />} />
            <Route path='/Itineraires_Hebergements' element={<Itineraires_Hebergements />} />
            <Route path='/A_faire_dans_la_region' element={<A_faire_dans_la_region />} />
            <Route path='/RSVP' element={<RSVP />} />
            <Route path='/Liste_de_mariage' element={<Liste_de_mariage />} />
            <Route path='/Photos_Videos' element={<Photos_Videos />} />
          </Routes>
          <Footer />
        </Router>
    </>
  );
}

export default App;
