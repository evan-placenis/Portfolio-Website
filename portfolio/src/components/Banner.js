import React, {useEffect, useRef, useState} from 'react';
export default function Banner(props){
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
    return(
        <div class = "grid md:grid-cols-6 ">   
            {/* Navigation */}
            <div class = " bg-white md:col-span-1 flex justify-center md:justify-end">
                <nav class="  sticky top-0 text-left md:h-screen">
                    <div class = "flex justify-between items-center">
                       
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
                            <a href = "/About" class = "px-4 flex justify-center md:justify-end">
                                <span class = "mr-4">About</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>
                            </a>
                        </li>
                        <li class = "py-1">
                            <a href = "/Contact" class = "px-4 flex justify-center md:justify-end">
                                <span class = "mr-4" >Contact</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                                </svg>

                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {props.children}
        </div>
    );
}