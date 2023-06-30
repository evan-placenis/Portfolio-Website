export default function Projects(){
    return(
        <div class = "grid md:grid-cols-6">   
            {/* Navigation*/}
            <div class = "bg-white md:col-span-1">
                <nav>
                    <div>
                        {/* Make this someting to toggle?*/}
                        <h1 class = "font-bold uppercase p-4 border-b-gray-100">
                            <a href = "#"> Evan Placenis </a>
                        </h1>
                    </div>
                    <ul>
                        <li class = "text-gray-700 font-bold">
                            <a href = "#">
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href = "#">
                                <span>About</span>
                            </a>
                        </li>
                        <li>
                            <a href = "#">
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            
            {/* Title and paragraph*/}
            <div class = "bg-gray-100 md:col-span-5">
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

                {/* Cards for projects*/}
                <div class = "mt-8 grid lg:grid-cols-3 gap-10">
                    <div class = "bg-white hover:bg-gray-200 rounded overflow-hidden shadow-md relative">
                        <img src="test.jpg" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                        <div class="m-4">
                            <span class="font-bold">Name of projects</span>
                            <span class="block text-gray-500 text-sm">Description of project</span>
                        </div>
                        <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                            <span>Python</span>
                        </div>
                    </div>

                    <div class = "bg-white hover:bg-gray-200 rounded overflow-hidden shadow-md relative">
                        <img src="test.jpg" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                        <div class="m-4">
                            <span class="font-bold">Name of projects</span>
                            <span class="block text-gray-500 text-sm">Description of project</span>
                        </div>
                        <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                            <span>Python</span>
                        </div>
                    </div>

                    <div class = "bg-white hover:bg-gray-200 rounded overflow-hidden shadow-md relative">
                        <img src="test.jpg" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                        <div class="m-4">
                            <span class="font-bold">Name of projects</span>
                            <span class="block text-gray-500 text-sm">Description of project</span>
                        </div>
                        <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                            <span>Python</span>
                        </div>
                    </div>

                    <div class = "bg-white hover:bg-gray-200 rounded overflow-hidden shadow-md relative">
                        <img src="test.jpg" alt="test" class = "w-full h-32 sm:h-48 object-cover"></img>
                        <div class="m-4">
                            <span class="font-bold">Name of projects</span>
                            <span class="block text-gray-500 text-sm">Description of project</span>
                        </div>
                        <div class = "bg-green-100 text-secondary-200 text-xs uppercase font-bold rounded-full absolute top-0 ml-2 mt-2">
                            <span>Python</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    
    );
}

//ml 2 = margin left of 2
//mt = margin top
//pb = padding bottom
//block = pushes to next line
