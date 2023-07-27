import React, {useEffect, useRef, useState} from 'react';
import test from '../images/bg3.jpg';
import test2 from '../images/sky.jpg';
import test3 from '../images/t.png';
import food101 from '../images/food101.jpg'
import twitter from '../images/twitter.webp'
import bitcoin from '../images/bitcoin.avif'
function Projects(){
    useEffect(()=>{
        if(!window) return;
            const dropDown = document.querySelector('#dropDown');
            const menu = document.querySelector('#menu');
            
            function handleClick(){
                if(menu.classList.contains('hidden')){
                    menu.classList.remove('hidden');
                }else{
                    menu.classList.add('hidden');
                }
            }

            dropDown.addEventListener('click', handleClick);
        
        
        return() => {
            if (window !== null) {
                dropDown.removeEventListener('click', handleClick);
              }
        }
    }, []);

    function setScrollVar(){
        const htmlElement = document.documentElement
        const percentOfScreenHeightScrolled = htmlElement.scrollTop /
        htmlElement.clientHeight
        console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
        htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100))
    }
    window.addEventListener("scroll", setScrollVar)
    window.addEventListener("resize", setScrollVar) //reset size of window when resized
    setScrollVar()//handle page refresh

    useEffect(() => {
        const oberver = new IntersectionObserver(entries =>{
            for (let i = entries.length - 1; i >= 0; i--){
                const entry = entries[i]
                //if its on the page
                if(entry.isIntersecting){
                    document.querySelectorAll("[data-img]").forEach(img =>{
                        img.classList.remove("show")
                    })
                    const img = document.querySelector(entry.target.dataset.imgToShow)
                    img?.classList.add("show")
                    break
                }
            }
        })
    
        document.querySelectorAll("[data-img-to-show]").forEach(section =>{
            oberver.observe(section)
        })
    
    }, []);
      
    


    return(
        <div class = "grid md:grid-cols-6 ">   
            {/* Navigation*/}
            <div class = " bg-white md:col-span-1 flex justify-center md: justify-end">
                <nav class="  sticky top-0 text-left">
                    <div class = "flex justify-between items-center">
                        {/* Make this someting to toggle?*/}
                       
                        <p class = "font-bold uppercase p-4 border-b-gray-100">
                            Evan Placenis
                        </p>
                        <div class = "px-1 cursor-pointer md:hidden" id = "dropDown">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </div>
                    <ul class= "mt-6 hidden md:block" id = "menu">
                        <li class = "text-gray-700 font-bold py-1">
                            <a href = "/" class = "px-4 flex justify-center md:justify-end">
                                <span class = "mr-4">Home</span>
                                <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>

                            </a>
                        </li>
                        <li class = "py-1">
                            <a href = "#" class = "px-4 flex justify-center md:justify-end">
                                <span class = "mr-4">Projects</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                </svg>

                            </a>
                        </li>
                        <li class = "py-1">
                            <a href = "/About" class = "px-4 flex justify-center md:justify-end">
                                <span class = "mr-4">About</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>
                            </a>
                        </li>
                        <li class = "py-1">
                            <a href = "#" class = "px-4 flex justify-center md:justify-end">
                                <span class = "mr-4" >Contact</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                                </svg>

                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            
                
            <body class = "md:col-span-5">
                {/* Each of the imges that will be shown */}
                <div className = "imgs">
                    <div data-img id = "img-1" className = "top-section-img show"> {/* className = "top-section-img show" */}
                        <div  class = "mt-8 grid lg:grid-cols-3 gap-10 mx-10">
                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={food101} alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Food Vision</span>
                                    <span class="block text-gray-500 text-sm">Image Classification with 95% accuracy on 101 different types of food</span>
                                </div>
                                {/* icon*/}
                                <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>

                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={twitter} alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Tweet Checker</span>
                                    <span class="block text-gray-500 text-sm">Sentiment Analysis on Tweets trained on</span>
                                </div>
                                {/* icon*/}
                                <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>

                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={bitcoin} alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Bit Predict</span>
                                    <span class="block text-gray-500 text-sm">Time Series Forcast Models on the price of bitcoin</span>
                                </div>
                                {/* icon*/}
                                <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div data-img id = "img-2" className = "top-section-img">
                        <div  class = "mt-8 grid lg:grid-cols-3 gap-10 mx-10">
                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src="test.jpg" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Name of projects</span>
                                    <span class="block text-gray-500 text-sm">Description of project</span>
                                </div>
                                {/* icon*/}
                                <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>

                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src="test.jpg" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Name of projects</span>
                                    <span class="block text-gray-500 text-sm">Description of project</span>
                                </div>
                                {/* icon*/}
                                <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>

                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src="test.jpg" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Name of projects</span>
                                    <span class="block text-gray-500 text-sm">Description of project</span>
                                </div>
                                {/* icon*/}
                                <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    


                    <div data-img id = "img-3" className = "top-section-img">
                        <div  class = "mt-8 grid lg:grid-cols-3 gap-10 mx-10">
                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src="test.jpg" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Name of projects</span>
                                    <span class="block text-gray-500 text-sm">Description of project</span>
                                </div>
                                {/* icon*/}
                                <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>

                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src="test.jpg" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Name of projects</span>
                                    <span class="block text-gray-500 text-sm">Description of project</span>
                                </div>
                                {/* icon*/}
                                <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>

                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src="test.jpg" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Name of projects</span>
                                    <span class="block text-gray-500 text-sm">Description of project</span>
                                </div>
                                {/* icon*/}
                                <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>
                        </div>
                    </div>
                

                    <div data-img id = "img-4" className = "top-section-img">
                        <div  class = "mt-8 grid lg:grid-cols-3 gap-10 mx-10">
                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src="test.jpg" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Name of projects</span>
                                    <span class="block text-gray-500 text-sm">Description of project</span>
                                </div>
                                {/* icon*/}
                                <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>

                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src="test.jpg" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Name of projects</span>
                                    <span class="block text-gray-500 text-sm">Description of project</span>
                                </div>
                                {/* icon*/}
                                <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>

                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src="test.jpg" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Name of projects</span>
                                    <span class="block text-gray-500 text-sm">Description of project</span>
                                </div>
                                {/* icon*/}
                                <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Title and paragraph*/}
                <section className = "top-section full-screen-section">
                    <div class="left">
                        <h1>Projects</h1>
                        <p>
                            Testing out Paragraph
                        </p>
                    </div>
                    {/* <div className = "left">
                        <div class = "flex-justify-around flex items-center px-2 py-6 xs:px-2 sm:px-4 md:px-8 lg:px-16">
                            <h1 class = "flex justify-start font-bold border-b border-gray-200 pb-2 mt-12 text-4xl">Projects</h1>
                            <div class = "flex items-end mt-8 pl-5">
                                <div class = "bg-red-500 h-4 w-4"></div>
                                <div class = "bg-blue-500 h-6 w-4"></div>
                                <div class = "bg-green-500 h-9 w-4"></div>
                            </div>
                        </div>
                            
                        
                        <p class = "flex justify-center">
                            Testing out the paragaph
                        </p>
                    </div> */}
                    <div class="right"></div>
                </section>

                
                {/* Content on each page*/}    
                <section className = "full-screen-section ">
                    <h1> Artifical Intelligence</h1>
                    <p>...</p>
                    <div data-img-to-show = "#img-1"></div>
                </section>

                <section className = "full-screen-section">
                    <h1> Web Development </h1>
                    <p>...</p>
                    <div data-img-to-show = "#img-2"></div>
                </section>
                {/*  Web Development Continued */}
                <section className = "full-screen-section">
                    {/* <h1>  </h1> */}
                    <p>Web Development Continued</p>
                    <div data-img-to-show = "#img-3"></div>
                </section>

                <section className = "full-screen-section">
                    <h1> Additional Projects </h1>
                    <p>...</p>
                    <div data-img-to-show = "#img-4"></div>
                </section>
                    
            </body>
            
            
        </div>
    
    );
}
export default Projects
//ml 2 = margin left of 2
//mt = margin top
//pb = padding bottom
//block = pushes to next line
//rounded-full cursor-pointer for buttons
//tracking-wider = more space between letters


{/* Button
<div>
    <button class = "rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider border-red-500 md:border-2">TESTING</button>
</div> */}



// list thing
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
//   <path fill-rule="evenodd" d="M6 4.75A.75.75 0 016.75 4h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.75zM6 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 10zm0 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM1.99 4.75a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 15.25a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 10a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V10z" clip-rule="evenodd" />
// </svg>
//or
    // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    // <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    // </svg>





    
                // {/* Cards for projects*/}
                // <div class = "mt-8 grid lg:grid-cols-3 gap-10 mx-10">
                //     <div class = "bg-white hover:bg-gray-200 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                //         <img src="test.jpg" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                //         <div class="m-4">
                //             <span class="font-bold">Name of projects</span>
                //             <span class="block text-gray-500 text-sm">Description of project</span>
                //         </div>
                //         {/* icon*/}
                //         <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                //             <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                //         </svg>
                //         <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                //             <span>Python</span>
                //         </div>
                //     </div>

                    // <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                    //     <img src="test.jpg" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                    //     <div class="m-4">
                    //         <span class="font-bold">Name of projects</span>
                    //         <span class="block text-gray-500 text-sm">Description of project</span>
                    //     </div>
                    //     {/* icon*/}
                    //     <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    //         <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    //     </svg>
                    //     <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                    //         <span>Python</span>
                    //     </div>
                    // </div>

                //     <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                //         <img src="../images/bg3.jpg" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                //         <div class="m-4">
                //             <span class="font-bold">Name of projects</span>
                //             <span class="block text-gray-500 text-sm">Description of project</span>
                //         </div>
                //         <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                //             <span>Python</span>
                //         </div>
                //     </div>

                //     <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                //         <img src="" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                //         <div class="m-4">
                //             <span class="font-bold">Name of projects</span>
                //             <span class="block text-gray-500 text-sm">Description of project</span>
                //         </div>
                //         <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                //             <span>Python</span>
                //         </div>
                //     </div>
                // </div>
                
