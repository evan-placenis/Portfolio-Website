import './App.css';
import Setup from './components/Setup';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Setup/>}/>

            <Route path = '/Projects' element = {<Projects/>}/>
            <Route path = '/Skills' element = {<Skills/>}/>
            <Route path = '/About' element = {<About/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;