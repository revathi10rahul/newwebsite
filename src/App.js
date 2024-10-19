
import './App.css';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Content from './pages/Content';
import Deconsolidation from './pages/Deconsolidation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter,Routes,Route  } from 'react-router-dom';
import NavbarCommon from './pages/NavbarCommon';
function App() {
  return (
    <HashRouter>
    <div className="App">
    {/* <CommonNavbar/> */}
    <NavbarCommon/>
    <Routes>
    
     <Route path='/' element={<Content/>}/>
     <Route path='/deconsolidation' element={<Deconsolidation/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>

   </Routes>
       <Footer/>
    </div>
    </HashRouter>
  );
}

export default App;
