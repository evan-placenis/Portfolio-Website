import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import {CSS2DRenderer, CSS2DObject} from "three/examples/jsm/renderers/CSS2DRenderer"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import bg3 from '../images/bg3.jpg'
import sky from '../images/sky.jpg'
import {useNavigate} from 'react-router-dom';
function Setup(){
    // Setup
    const canvasRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() =>{
        if (!canvasRef.current) return;
        
        //setup scene, camera, renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        camera.position.setZ(50);
        camera.position.setX(10);
        camera.position.setY(0);

        renderer.render(scene, camera);
        renderer.setClearColor(0xffffff);

        // // Background
        // const spaceTexture = new THREE.TextureLoader().load(bg3);
        // scene.background = spaceTexture;

        // Lights
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(5, 5, 5);

        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(pointLight, ambientLight);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();


        //Box
        const boxTexture = new THREE.TextureLoader().load(sky);
        const box = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: boxTexture }));
        box.position.z = -15;
        box.position.y = 10;
        scene.add(box);

        //label Renderer container
        const labelRenderer = new CSS2DRenderer();
        labelRenderer.setSize(window.innerWidth, window.innerHeight);
        labelRenderer.domElement.style.position = 'absolute';
        labelRenderer.domElement.style.top = '0px';
        labelRenderer.domElement.style.pointerEvents = 'none';
        document.body.appendChild(labelRenderer.domElement);

        //Create Spheres
        function createSphere(name, x,y,z){
            const geo = new THREE.SphereBufferGeometry(1);
            const mat = new THREE.MeshBasicMaterial({color: 0xFF0000});
            const mesh = new THREE.Mesh(geo,mat);
            mesh.position.set(x,y,z);
            mesh.name = name;
            return mesh;
        }

        const group = new THREE.Group();

        const sphereMesh1 = createSphere('sphereMesh1', -6, 0, 4);
        group.add(sphereMesh1);

        const sphereMesh2 = createSphere('sphereMesh2', -2, 0, -4);
        group.add(sphereMesh2);

        const sphereMesh3 = createSphere('sphereMesh3', 8, 0, 4);
        group.add(sphereMesh3);

        scene.add(group);

        //text
        const p = document.createElement('p');
        p.className = 'tooltip';
        const pContainer = document.createElement('div');
        pContainer.appendChild(p);
        const cPointLabel = new CSS2DObject(pContainer);
        scene.add(cPointLabel);

        //Mouse Movement
        const mousePos = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();


        const mouseMove = (e) => {
            mousePos.x = (e.clientX / window.innerWidth) *2 - 1;
            mousePos.y = -(e.clientY / window.innerHeight) *2 + 1;
            
            raycaster.setFromCamera(mousePos, camera);
            const intersects = raycaster.intersectObject(group);

            if (intersects.length > 0){
                //console.log(intersects.name);
                switch(intersects[0].object.name){
                    case 'sphereMesh1':
                        p.className = 'tooltip show';
                        cPointLabel.position.set(-6, 3, 4);
                        p.textContent = 'Skills';
                        break;

                    case 'sphereMesh2':
                        p.className = 'tooltip show';
                        cPointLabel.position.set(-2, 3, -4);
                        p.textContent = 'Projects';
                        break;

                    case 'sphereMesh3':
                        p.className = 'tooltip show';
                        cPointLabel.position.set(8, 3, 4);
                        p.textContent = 'About Me';
                        break;
                    
                    default:
                        break;
                }
            }else{
                p.className = 'tooltip hide';
            }
        }

        if(typeof window !== 'undefined'){
            window.addEventListener('mousemove', mouseMove);
        }

        //Mouse Click
        const handleClick = (e) => {
            mousePos.x = (e.clientX / window.innerWidth) *2 - 1;
            mousePos.y = -(e.clientY / window.innerHeight) *2 + 1;
            
            raycaster.setFromCamera(mousePos, camera);
            const intersects = raycaster.intersectObject(group);

            if (intersects.length > 0){
                console.log(intersects.name);
                switch(intersects[0].object.name){
                    case 'sphereMesh1':
                        p.className = 'tooltip hide';
                        navigate('/Skills');
                        break;

                    case 'sphereMesh2':
                        p.className = 'tooltip hide';
                        navigate('/Projects');
                        break;

                    case 'sphereMesh3':
                        p.className = 'tooltip hide';
                        navigate('/About');
                        break;
                    
                    default:
                        break;
                }
            }

        
        }
        if(typeof window !== 'undefined'){
            window.addEventListener('click', handleClick);
        }
        

        // Animation Loop
        const animate = () =>{
            requestAnimationFrame(animate);

            labelRenderer.render(scene,camera);
            //controls.update();
            renderer.render(scene, camera);
        }
        animate();

        //WHEEL METHOD OF SCROLLING
        const handleWheel = (event) => {
            event.preventDefault();
            const delta = event.deltaY;
            const scrollSpeed = 0.015;
            camera.position.z += delta * scrollSpeed;
            camera.position.x += delta * scrollSpeed * -0.1;
            camera.rotation.y += delta * scrollSpeed * -0.0002;

            box.rotation.x += 0.10;
            box.rotation.y += 0.05;
            box.rotation.z += 0.10;
    
            renderer.render(scene, camera);
          };

          canvasRef.current.addEventListener('wheel', handleWheel, { passive: false });

        //handle Window Resizing
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            labelRenderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);
        };
        if (window !== null) {
            window.addEventListener('resize', handleResize);
        }
        

        //Cleanup
        return() => {
            
            
            if(canvasRef.current!==null){
                canvasRef.current.removeEventListener('wheel', handleWheel);
            }
            if (window !== null) {
                window.removeEventListener('click', handleClick);
                window.removeEventListener('mousemove', mouseMove);
                window.removeEventListener('resize', handleResize);
              }
            renderer.dispose();
        }
    }, []);

    return(
        <div style={{ overflow: 'hidden', width: '100%', height: '100vh' }} >
            <canvas id = "canvas" ref={canvasRef} style={{ width: '100%', height: '100%' }} />
        </div>
    )
        
}

export default Setup




        
        //Text
        // const p = document.createElement('p');
        // p.textContent = "Hello World;"
        // const cPointLabel = new CSS2DObject(p);
        // scene.add(cPointLabel);
        // cPointLabel.position.set(-6, 0.8, 4);

        //allow transform to work on text
        // const div = document.createElement('div');
        // div.appendChild(p);
        // const divContainer = new CSS2DObject(div);
        // scene.add(divContainer);
