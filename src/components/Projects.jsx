"use client"
import { useNavigate } from "react-router-dom"
import fastFoodVid from "../assets/food-app-demo.mp4"

const Projects = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen px-3 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-800 text-black w-full overflow-x-hidden">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-stone-100 font-semibold mb-8 sm:mb-10 break-words text-center sm:text-left">
        Projects
      </h2>

      {/* Crispy Bites */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-500 border-b py-4 sm:py-6 w-full gap-4 sm:gap-0">
        <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 flex-1 min-w-0">
          {/* Circle with image inside */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white border-2 overflow-hidden flex-shrink-0 shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwKVd1uz_lEsR0hma_FRCcRubRQGXVXuTlMHK0PIhnLptKGSTFW8PfP_8AOrP7Ro43PQ&usqp=CAU"
              alt="Crispy Bites"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg sm:text-xl lg:text-2xl text-stone-100 font-semibold break-words leading-tight">
              Crispy Bites
            </h3>
            <p className="text-sm sm:text-base lg:text-lg italic text-stone-100 break-words mt-1">
              Fast Food Website using HTML, CSS, JS
            </p>
          </div>
        </div>
        <a
          href="https://muaazahmed03.github.io/Crispy-Bites/#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-100 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 flex items-center justify-center hover:bg-teal-300 hover:text-black transition-all duration-300 flex-shrink-0 self-center sm:ml-4 text-lg sm:text-xl"
          aria-label="View Crispy Bites project"
        >
          →
        </a>
      </div>

      {/* Multiple Foods Restaurants */}
      <div className="flex flex-col sm:flex-row sm:items-center border-gray-500 justify-between border-b py-4 sm:py-6 w-full gap-4 sm:gap-0">
        <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 flex-1 min-w-0">
          {/* Circle video phone placeholder */}
          <div className="w-16 h-28 sm:w-18 sm:h-32 lg:w-20 lg:h-36 bg-white border-2 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0 shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover rounded-xl"
              onError={(e) => console.log("Video load error:", e)}
            >
              <source src={fastFoodVid} type="video/mp4" />
              <div className="flex items-center justify-center h-full w-full bg-gray-200 text-gray-500 text-xs text-center p-2">
                Video not supported
              </div>
            </video>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-stone-100 break-words leading-tight">
              Food Fusion (Multiple Foods Restaurants)
            </h3>
            <p className="text-sm sm:text-base lg:text-lg italic text-stone-100 break-words mt-1">
              Mobile App for food delivery using React Native with React Native Paper
            </p>
          </div>
        </div>

        {/* Arrow Button to local FastFood.jsx */}
        <button
          onClick={() => navigate("/fastfood")}
          className="text-stone-100 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 flex items-center justify-center hover:bg-teal-300 hover:text-black transition-all duration-300 flex-shrink-0 self-center sm:ml-4 text-lg sm:text-xl active:scale-95"
          aria-label="View Food App details"
        >
          →
        </button>
      </div>

      {/* Mobile-specific improvements */}
      <div className="mt-8 sm:hidden text-center">
        <p className="text-stone-400 text-sm">Tap the arrows to view projects</p>
      </div>
    </div>
  )
}

export default Projects
