
import './App.css';
import Content from './pages/Content';
import Deconsolidation from './pages/Deconsolidation';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter,Routes,Route  } from 'react-router-dom';
function App() {
  return (
    <HashRouter>
    <div className="App">
    <Routes>
     <Route path='/' element={<Content/>}/>
     <Route path='/deconsolidation' element={<Deconsolidation/>}/>
   </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
