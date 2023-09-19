import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Banner from './components/Banner'
function App() {
  //setup scene, camera, renderer
  // const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  // const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
  return (
    <div>
      <BrowserRouter>
        <Banner>
          <Routes>
                {/* <Route path = '/' element = {<Setup />}/> */}
                <Route path = '' element = {<Projects/>}/>
                <Route path = '/About' element = {<About/>}/>
                <Route path = '/Contact' element = {<Contact/>}/>
                
            </Routes>
        </Banner>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;