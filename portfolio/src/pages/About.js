

import qa from '../images/QA.png'
export default function About(){
    return (
        <div class = "md:col-span-5 bg-rgb-custom" >
            <section class = "pt-4 pl-10" >
                <div class="left">
                    <h1>About</h1>
                </div>
            </section>

            {/* <div class=" w-60 h-60 md: w-96 md: h-96 flex items-center justify-center px-4 py-4 my-10 bg-white border rounded-lg shadow-md mx-auto">
                <img src={qa} class = "w-full h-32 sm:h-48 object-cover"></img>
            </div> */}
            <div class=  "flex items-center justify-center py-4">
              <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="">
                      <img class="rounded-t-lg mx-auto" src={qa} alt="" />
                  </a>
                  <div class="p-5">
                      <a href="">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">McMaster Software Engineering Year IV</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Deep Learning Enthusiast</p>
                  </div>
              </div>

            </div>


            

            <div class="bg-rgb-about-custom flex flex-col items-left justify-left p-5 pb-10 pt-10">
              <h1 class="text-white text-4xl">Recipient of a TensorFlow Developer Certificate</h1>
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <p class="mb-3 text-white dark:text-gray-400">Beyond my formal education, my passion for artificial intelligence has led me to continually seek opportunities for learning and skill development in AI. To challenge myself and validate my proficiency, I undertook rigorous preparation to pass the TensorFlow Exam.</p>
                <p class="mb-3 text-white dark:text-gray-400">The TensorFlow exam required a thorough understanding of:
                  <ul class="list-disc mb-3 text-white dark:text-gray-400 ml-8">
                    <li class = "mb-2 mt-2">
                      Image classification, NLP, and time series Neural Network Architecture
                    </li>
                    <li class = "mb-2">
                      Knowledge in data preprocessing, preventing overfitting, and leveraging transfer learning
                    </li>
                    <li class = "mb-2">
                      Optimizing model performance
                    </li>
                    <li class = "mb-2">
                      Best practices in ML development
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div class="bg-rgb-custom flex flex-col items-left justify-left p-5 pb-10 pt-10">
              <h1 class="text-black text-4xl">Further AI Studies</h1>
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <p class="mb-3 text-gray-500 dark:text-gray-400">After passing the Tensorflow exam, which primarily focused on classification, I was eager to learn more about AI and its capabilities. Since then, I have deepened my knowledge in AI by engaging in numerous Generative AI and Transformer projects with images and text respectively.</p>
                <p class="mb-3 text-gray-500 dark:text-gray-400">Generative AI and Transformer projects include: 
                  <ul class="list-disc mb-3 gray-500 dark:text-gray-400 ml-8 ">
                    <li class = "mb-2 mt-2" >
                      Question-Answer bot 
                    </li>
                    <li class = "mb-2">
                      Utilizing pretrained Text Summarization models on HuggingFace
                    </li>
                    <li class = "mb-2">
                      Generating images of clothes from a VAE architecture with 200-dimensional latent space
                    </li>
                    <li class = "mb-2">
                      Generating images of Lego blocks with a WGAN architecture
                    </li>
                    <li class = "mb-2">
                      Generating images of flowers with a Denoising Diffusion Model Architecture
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div class="bg-rgb-about-custom flex flex-col items-left justify-left p-5 pb-10 pt-10">
              <h1 class="text-white text-4xl">McMaster University</h1>
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <p class="mb-3 text-white dark:text-gray-400">In my studies, team engagement, and work experience at McMaster I’ve been able to contribute and lead many different school projects using software development principles. </p>
                <p class="mb-3 text-white dark:text-gray-400">These projects have equipped me with:
                  <ul class="list-disc mb-3 gray-500 dark:text-gray-400  ">
                    <li class = "mb-2 mt-2">
                      Solid knowledge of programming and architecture design, including a comprehensive understanding of the software development life cycle
                    </li>
                    <li class = "mb-2">
                      experience in gathering and analyzing requirements
                    </li>
                    <li class = "mb-2">
                      designing class diagrams
                    </li>
                    <li class = "mb-2">
                      architecting software systems, and
                    </li>
                    <li class = "mb-2">
                      crafting scalable and maintainable solutions
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div class="bg-rgb-custom flex flex-col items-left justify-left p-5 pb-10 pt-10">
              <h1 class="text-black text-4xl">Work Experience</h1>
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <p class="mb-3 text-gray-500 dark:text-gray-400">I previously worked at Toronto Adventures for four years. Shortly after joining the company, I was promoted to Location Manager and successfully led the team, ensuring that our goals were met and often exceeded. This role not only sharpened my leadership skills but also honed my ability to make critical decisions under pressure.</p>
                <p class="mb-3 text-gray-500 dark:text-gray-400"> My experience has taught me:
                 <ul class="list-disc mb-3 gray-500 dark:text-gray-400 ml-8">
                    <li class = "mb-2 mt-2">
                      Effective leadership skills that result in increased efficiency and productivity
                    </li>
                    <li class = "mb-2">
                      To guide my team toward successby creating an environment of collaboration, open dialogue, and continuous improvement.
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div class="bg-rgb-about-custom flex flex-col items-left justify-left p-5 pb-10 pt-10">
              <h1 class="text-white text-4xl">My thoughts on AI...</h1>
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <p class="mb-3 text-white dark:text-gray-400">When deciding what career to go into, I knew I wanted to work on the cutting edge of technology and be a part of new innovations that generations will benefit from years after I’m around. I am a firm believer that timing plays a crucial role in this, and it is clear that now is the time for Artificial Intelligence. I also tend to think that the AI revolution will be unlike any other technology revolution before, in that, it is the first time we are creating something that is intrinsically creative itself (compared to past revolutions revolving around increasing production speed).</p>
                <p class="mb-3 text-white dark:text-gray-400">Because of this, and also unlike past revolutions throughout history, I think the AI revolution has the possibility to disrupt more jobs than it will actually create. However I believe it will be a turning point in humanity and how it operates (similar to how the agricultural revolution made hunters and gatherers obsolete, but changed how people live their lives). The idea that we are living in a time of innovation that will be remembered for generations to come fuels my passion for learning AI. Hopefully, it will be remembered in a good way 🙂.</p>
              </div>
            </div>

            <div class="bg-rgb-custom flex flex-col items-left justify-left p-5 pb-10 pt-10">
              <h1 class="text-black text-4xl">A Little About Me</h1>
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <p class="mb-3 text-gray-500 dark:text-gray-400"> Outside of school I enjoy playing sports, and have enjoyed it my whole life. From a young age I was a competitive hockey player, playing as high as AA GTHL for some time before focusing on school. Unfortunately, I am an avid Leafs fan and have suffered from it my whole life as well 😆.  </p>
                <p class="mb-3 text-gray-500 dark:text-gray-400">More recently, I picked up basketball and it became one of my biggest hobbies. Starting in grade 10, I practiced as much as I could in hopes to be impactful on the highschool basketball team. By my senior year, I had become the starting center and helped bring my school to its first city championship, in Division 1, in over 100 years at Parkdale Collegiate Institute. During this, university scouts started calling me and coming to our games to evaluate my abilities. This is 
                    one of my best memories in school because it showed me how hard work pays off, and this is a lesson I plan to bring with me throughout my life.
                </p>
              </div>
            </div>
        </div>
    );
}