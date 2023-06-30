import React, {useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import {CSS2DRenderer, CSS2DObject} from "three/examples/jsm/renderers/CSS2DRenderer"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import bg3 from '../images/bg3.jpg'
import sky from '../images/sky.jpg'
import {useNavigate} from 'react-router-dom';
import * as YUKA from 'yuka';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
function Scene(){
    // Setup
    const canvasRef = useRef(null);
    const navigate = useNavigate();

    const [model, setModel] = useState(null);
    const [scene, setScene] = useState(null);
    const [camera, setCamera] = useState(null);
    const [renderer, setRenderer] = useState(null);
    const [box, setBox] = useState(null);

    //Load Scene,camera, renderer and objects
    useEffect(() =>{
        if (!canvasRef.current) return;
        console.log("setScene");
        const newScene = new THREE.Scene();
        const newCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        const newRenderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

        newRenderer.setPixelRatio(window.devicePixelRatio);
        newRenderer.setSize(window.innerWidth, window.innerHeight);
        
        newCamera.position.setZ(50);
        newCamera.position.setX(10);
        newCamera.position.setY(0);

        //loadObjects();

        newRenderer.render(newScene, newCamera);
        newRenderer.setClearColor(0xffffff);

        setScene(newScene);
        setCamera(newCamera);
        setRenderer(newRenderer);
        
        return ()=> {
            /// newRenderer.dispose();
            // if(box && scene && camera){
            //     scene.remove(box);
            //     scene.remove(camera);
            // }
            // if (scene) {
            //     scene.traverse((object) => {
            //       if (object.isMesh) {
            //         object.geometry.dispose();
            //         object.material.dispose();
            //       }
            //     });
            // }
        }
    }, []);

    useEffect(()=>{
        const loadObjects = () => {
            if(scene){
                console.log("set objects");
                
    
                // // Background
                // const spaceTexture = new THREE.TextureLoader().load(bg3);
                // scene.background = spaceTexture;
    
                // Lights
                const pointLight = new THREE.PointLight(0xffffff);
                pointLight.position.set(5, 5, 5);
    
                const ambientLight = new THREE.AmbientLight(0xffffff);
                scene.add(pointLight, ambientLight); //--------------
    
                //Box
                const boxTexture = new THREE.TextureLoader().load(sky);
                const newBox = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: boxTexture }));
                newBox.position.z = -15;
                newBox.position.y = 10;
                setBox(newBox);
                if(box){
                    scene.add(newBox);
                }
                
                
            }
        }
        loadObjects();//s

    }, [scene]);
    
 


    useEffect(() =>{
        if(!(renderer || scene || camera)) return;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        //SHIP
        const ship = new YUKA.Vehicle();
                
        function sync(entity, rendererComponent){
            rendererComponent.matrix.copy(entity.worldMatrix); //mesh copies all matrix calculation needed for geomtry transformations (make YUKA handle instead of THREE.js)
        }

        //create path for entity
        const path = new YUKA.Path();
        path.add(new YUKA.Vector3(-6, 0, 4));
        path.add(new YUKA.Vector3(-2, 0, -4));
        path.add(new YUKA.Vector3(8, 0, 4));

        path.loop = true; //enable the ship to continue looping over the path 

        ship.position.copy(path.current());//put ship at first checkpoint

        const loader = new GLTFLoader();
        loader.load('./assets/rocket.glb', function(glb){
            scene.add( glb.scene );
            const model = glb.scene;

            setModel(model);
            scene.add(model);
            model.matrixAutoUpdate = false;
            //ship.scale = new YUKA.Vector3(0.5,0.5,0.5);
            ship.setRenderComponent(model, sync);
        });

        //Set behaviour
        const followPathBehavior = new YUKA.FollowPathBehavior(path, 3);
        ship.steering.add(followPathBehavior);

        ship.maxSpeed = 3;

        const onPathBehavior = new YUKA.OnPathBehavior(path);
        onPathBehavior.radius = 0.5;
        ship.steering.add(onPathBehavior);

        const entityManager = new YUKA.EntityManager();
        entityManager.add(ship);

        //Make Path visisble
        const position = [];
        for(let i = 0; i < path._waypoints.length; i++){
            const waypoint = path._waypoints[i];
            position.push(waypoint.x, waypoint.y, waypoint.z);
        }

        const lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3));

        const lineMaterial = new THREE.LineBasicMaterial({color: 0x000000F});
        const lines = new THREE.LineLoop(lineGeometry, lineMaterial);
        scene.add(lines);

        //renderer.render(scene, camera); //need to change this


        
    
        //YUKA
        // const shipGeometry = new THREE.ConeGeometry(1,0.5,8);
        // shipGeometry.rotateX(Math.PI * 0.5);
        // const shipMaterial = new THREE.MeshNormalMaterial();
        // const shipMesh = new THREE.Mesh(shipGeometry, shipMaterial);
        // shipMesh.matrixAutoUpdate = false;
        // scene.add(shipMesh);

        
        
        //label Renderer container
        const labelRenderer = new CSS2DRenderer();
        labelRenderer.setSize(window.innerWidth, window.innerHeight);
        labelRenderer.domElement.style.position = 'absolute';
        labelRenderer.domElement.style.top = '0px';
        labelRenderer.domElement.style.pointerEvents = 'none';
        document.body.appendChild(labelRenderer.domElement);

        //Create Spheres
        function createSphere(name, x,y,z){
            const geo = new THREE.SphereGeometry(1);
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
        
        const time = new YUKA.Time();
        // Animation Loop
        const animate = () =>{
            requestAnimationFrame(animate);
            const delta = time.update().getDelta();
            entityManager.update(delta);
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
            if(model){
                scene.remove(model);
            }
            
            
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

export default Scene




        
        //Textd
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
