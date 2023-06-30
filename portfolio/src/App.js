import './App.css';
import Setup from './components/Setup';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';
import Scene from './components/Scene';
function App() {
  //setup scene, camera, renderer
  // const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  // const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Setup />}/>

            <Route path = '/Projects' element = {<Projects/>}/>
            <Route path = '/Skills' element = {<Skills/>}/>
            <Route path = '/About' element = {<About/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;