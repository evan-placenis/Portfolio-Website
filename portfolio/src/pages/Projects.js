import React, {useEffect} from 'react';
import food101 from '../images/food101.jpg'
import twitter from '../images/twitter.webp'
import bitcoin from '../images/bitcoin.avif'
import qa from '../images/QA.png'
import summary from '../images/summary.png'
import generation from '../images/generation.png'
import space from '../images/space.png'
import snake from '../images/snake.png'
import robo from '../images/robo.png'
import pattern from '../images/pattern.png'
import balance from '../images/balance.jfif'
import face from '../images/face.jfif'
import WGAN from '../images/WGAN.png'
import VAE from '../images/VAE.jfif'
import diffusion from '../images/diffusion.jfif'
function Projects(){

    function setScrollVar(){
        const htmlElement = document.documentElement
        const percentOfScreenHeightScrolled = htmlElement.scrollTop /
        htmlElement.clientHeight
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
                
            <body class = "md:col-span-5">
                {/* Each of the imges that will be shown */}
                <div className = "imgs">

                    <div data-img id = "img-1" className = "top-section-img show">
                        <div  class = "mt-8 grid lg:grid-cols-3 gap-10 mx-10">
                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={WGAN} class = "w-64 h-32 sm:h-48 object-cover mx-auto"></img>
                                <div class="m-4">
                                    <span class="font-bold">WGAN</span>
                                    <span class="block text-gray-500 text-sm">Utilized the Wasserstein loss function in a GAN. The generator and discriminator are trained simultaneously to generate images of Lego blocks.</span>
                                </div>
                                {/* icon*/}
                                <a href = "">
                                    <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </a>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>

                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={diffusion}  class = "w-64 mx-auto h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Diffusion Model</span>
                                    <span class="block text-gray-500 text-sm">Designed a denoising diffusion model to generate realistic images of flowers using a U-Net. </span>
                                </div>
                                {/* icon*/}
                                <a href = "https://github.com/evan-placenis/Denoising_Diffusion_Generative_Model">
                                    <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </a>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>

                            <div class = " bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={VAE}class = "w-64 mx-auto h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Variational Auto Encoder</span>
                                    <span class="block text-gray-500 text-sm">Created a VAE to map high-dimensional images into a low-dimensional latent space to sample from this latent space and generate new images of clothes.</span>
                                </div>
                                {/* icon*/}
                                <a href = "https://github.com/evan-placenis/Generative-Variational-Auto-Encoder">
                                    <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </a>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-img id = "img-2" className = "top-section-img">
                        <div  class = "mt-8 grid lg:grid-cols-3 gap-10 mx-10">
                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={qa}class = "w-64 h-32 sm:h-48 object-cover mx-auto"></img>
                                <div class="m-4">
                                    <span class="font-bold">Question Answering Bot</span>
                                    <span class="block text-gray-500 text-sm">Created an extractive QA model using Haystack to create a BM25 retriever and FARM reader to answer questions related to electronic products.</span>
                                </div>
                                {/* icon*/}
                                <a href = "https://github.com/evan-placenis/Transformer_Question_Answering">
                                    <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </a>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>

                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={summary} class = "w-64 h-32 sm:h-48 object-cover mx-auto"></img>
                                <div class="m-4">
                                    <span class="font-bold">Text Summarizing AI</span>
                                    <span class="block text-gray-500 text-sm">Used the pretrained Google transformer PEGASUS and fine-tuned it on SAMSum, a new domain it was not trained on, to evaluate its summarization capabilities.</span>
                                </div>
                                {/* icon*/}
                                <a href = "https://github.com/evan-placenis/Transformer-Text-Summarization">
                                    <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </a>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>

                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={generation} class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Text Generating AI</span>
                                    <span class="block text-gray-500 text-sm">Utilized the pretrained transformers Bart (Facebook) and Pegasus (Google) to fine tuned each LLM on a new domain and evaluate thier text generation strengths and weaknesses</span>
                                </div>
                                {/* icon*/}
                                <a href = "https://github.com/evan-placenis/Pretrained-Transformer-Text-Generation">
                                    <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </a>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div data-img id = "img-3" className = "top-section-img">
                        <div  class = "mt-8 grid lg:grid-cols-3 gap-10 mx-10">
                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={food101}  class = "w-64 h-32 sm:h-48 object-cover mx-auto"></img>
                                <div class="m-4">
                                    <span class="font-bold">Food Vision</span>
                                    <span class="block text-gray-500 text-sm"> Trained an Image Classification CNN model with 80% accuracy on 101 different types of food.</span>
                                </div>
                                {/* icon*/}
                                <a href = "https://github.com/evan-placenis/FoodVision">
                                    <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </a>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>

                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={twitter} class = "w-64 h-32 sm:h-48 object-cover mx-auto"></img>
                                <div class="m-4">
                                    <span class="font-bold">Tweet Checker</span>
                                    <span class="block text-gray-500 text-sm">Created a sentiment analysis NLP model trained to determine the overall sentiment of tweets, achieving 90% accuracy.</span>
                                </div>
                                {/* icon*/}
                                <a href = "https://github.com/evan-placenis?tab=repositories">
                                    <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </a>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>

                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={bitcoin} class = "w-64 h-32 sm:h-48 object-cover mx-auto"></img>
                                <div class="m-4">
                                    <span class="font-bold">Bit Predict</span>
                                    <span class="block text-gray-500 text-sm">Trained a Time Series RNN model to predict the price of bitcoin in the future.</span>
                                </div>
                                {/* icon*/}
                                <a href = "https://github.com/evan-placenis/Time_Series">
                                    <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </a>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div data-img id = "img-4" className = "top-section-img">
                        <div  class = "mt-8 grid lg:grid-cols-3 gap-10 mx-10">
                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={space} class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">3D-Space</span>
                                    <span class="block text-gray-500 text-sm">Utilized THREE.js to create an interactive 3D Space website.</span>
                                </div>
                                {/* icon*/}
                                <a href = "https://github.com/evan-placenis/3D-Space">
                                    <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </a>
                                <div class = "bg-orange-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>THREE.js</span>
                                </div>
                            </div>

                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={snake} class = "w-84 h-32 sm:h-48 object-cover mx-auto"></img>
                                <div class="m-4">
                                    <span class="font-bold">Snake</span>
                                    <span class="block text-gray-500 text-sm">Recreated a childhood favorite webiste game with javascript, this time, with different difficulty levels!</span>
                                </div>
                                {/* icon*/}
                                <a href = "https://github.com/evan-placenis/Snake">
                                    <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </a>
                                <div class = "bg-orange-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>javascript</span>
                                </div>
                            </div>

                            <div class = " bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={robo} class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">RoboFriends</span>
                                    <span class="block text-gray-500 text-sm">A responsive website that displays robots and their information. The user can search for a specific robot and the display will update real time</span>
                                </div>
                                {/* icon*/}
                                <a href = "https://github.com/evan-placenis/RoboFriendsWeb">
                                    <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </a>
                                <div class = "bg-orange-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Javascript</span>
                                </div>
                            </div>
                        </div>
                    </div>           

                    <div data-img id = "img-6" className = "top-section-img">
                        <div  class = "mt-8 grid lg:grid-cols-3 gap-10 mx-10">
                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={pattern}class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Design Pattern Mastery</span>
                                    <span class="block text-gray-500 text-sm">A quest to implement all 24 design patterns from the legendary book of patterns written by the gang of 4 </span>
                                </div>
                                {/* icon*/}
                                <a href = "https://github.com/stars/evan-placenis/lists/design-patterns">
                                    <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </a>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python/Java</span>
                                </div>
                            </div>

                            <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={balance} class = "w-64 h-32 sm:h-48 object-cover mx-auto"></img>
                                <div class="m-4">
                                    <span class="font-bold">Balance Beams</span>
                                    <span class="block text-gray-500 text-sm">Explored OpenAI gym and created a Reinforcement learning algorithm to train the sprite to learn to balance a pole through trial and error!</span>
                                </div>
                                {/* icon*/}
                                <a href = "https://github.com/evan-placenis/a-OpenAI-Gym">
                                    <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </a>
                                <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>Python</span>
                                </div>
                            </div>

                            <div class = " bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                                <img src={face} class = "w-full h-32 sm:h-48 object-cover"></img>
                                <div class="m-4">
                                    <span class="font-bold">Face Finder</span>
                                    <span class="block text-gray-500 text-sm">A full stack website developed through the ZTM Web Development course that allows users to login to an account and upload picutures. The website utilizes a Clarifai API behind the scenes to use AI to detect the faces in the photos.</span>
                                </div>
                                {/* icon*/}
                                <a href = "https://github.com/evan-placenis/face_recognition">
                                    <svg class = "w-5 mr-2 inline-block absolute top-0 right-0 mt-2 cursor-pointer hover:text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </a>
                                <div class = "bg-orange-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                                    <span>javascript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Title and paragraph*/}
                <section className = "top-section full-screen-section" >
                    <div class="left">
                        <h1>Projects</h1>
                        <p>
                            All projects can be found on <a href="https://github.com/evan-placenis?tab=repositories" class = "font-bold underline">Github</a>
                        </p>
                    </div>
                </section>

                
                {/* Content on each page*/}
              
                
                <section className = "full-screen-section">
                    <h1 class = "text-6xl lg:hidden"> 
                        Generative
                        <span class="vanish-letter">_</span>
                        AI
                    </h1> 

                    <h1 class="hidden lg:block">
                        Generative
                        <span class="vanish-letter">_</span>
                        AI
                    </h1> 
                    <div data-img-to-show = "#img-1"></div>
                </section>

                <section className = "full-screen-section ">

                    <h1 class = "text-6xl lg:hidden"> 
                        Transformers
                    </h1> 

                    <h1 class="hidden lg:block text-8xl"> 
                        NLP
                        <span class="vanish-letter">l</span> 
                        Using
                        <span class="vanish-letter">l</span>
                        Transformers
                    </h1>
                    <div data-img-to-show = "#img-2"></div>
                </section>

                <section className = "full-screen-section ">
                    <h1 class="text-6xl lg:hidden">
                        Classification 
                        <span class="vanish-letter">_</span>
                        AI
                    </h1>

                    <h1 class="hidden lg:block">
                        Classification 
                        <span class="vanish-letter">_</span>
                        AI
                    </h1>
                    <div data-img-to-show = "#img-3"></div>
                </section>

                <section className = "full-screen-section">
                    <h1 class="text-5xl lg:hidden">
                        Web 
                        <span class="vanish-letter">l</span>
                        Development
                    </h1>
                    <h1 class="hidden lg:block text-8xl">
                        Web 
                        <span class="vanish-letter">l</span>
                        Development
                    </h1>
                    <div data-img-to-show = "#img-4"></div>
                </section>

                <section className = "full-screen-section">
                    <h1 class="text-5xl lg:hidden"> 
                        Additional 
                        <span class="vanish-letter">l</span>
                        Projects 
                    </h1>
                    <h1 class="hidden lg:block text-8xl"> 
                        Additional 
                        <span class="vanish-letter">l</span>
                        Projects 
                    </h1>
                    <div data-img-to-show = "#img-6"></div>
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
                //         <img src="test.jpg" class = "w-full h-32 sm:h-48 object-cover"></img>
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
                    //     <img src="test.jpg" class = "w-full h-32 sm:h-48 object-cover"></img>
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
                //         <img src="../images/bg3.jpg" class = "w-full h-32 sm:h-48 object-cover"></img>
                //         <div class="m-4">
                //             <span class="font-bold">Name of projects</span>
                //             <span class="block text-gray-500 text-sm">Description of project</span>
                //         </div>
                //         <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                //             <span>Python</span>
                //         </div>
                //     </div>

                //     <div class = "bg-white hover:bg-gray-200 hover:scale-105 hover:shadow-xl rounded overflow-hidden shadow-md relative">
                //         <img src="" class = "w-full h-32 sm:h-48 object-cover"></img>
                //         <div class="m-4">
                //             <span class="font-bold">Name of projects</span>
                //             <span class="block text-gray-500 text-sm">Description of project</span>
                //         </div>
                //         <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                //             <span>Python</span>
                //         </div>
                //     </div>
                // </div>
                
