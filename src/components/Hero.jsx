// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-r from-indigo-950 via-purple-900 to-pink-950 overflow-hidden">
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-10 left-[-50px] w-40 h-40 rounded-full bg-pink-500 opacity-20"
        animate={{ y: [0, 20, 0], x: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-[-60px] w-60 h-60 rounded-full bg-indigo-400 opacity-15"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-purple-500 opacity-10"
        animate={{ y: [-20, 20, -20], x: [-20, 20, -20] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Card */}

      <div className="flex items-center justify-center w-full h-full">
        {/* front side */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          className="frontside bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 backdrop-blur-lg rounded-3xl shadow-2xl w-[88%] max-w-[260px] sm:max-w-[320px] md:max-w-[340px] text-gray-100 p-4 sm:p-5"
          style={{ maxHeight: "95vh" }}
        >
          {/* Name */}
          <motion.h1
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-3xl sm:text-4xl font-extrabold mb-2 text-center tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
          >
            Vishal
          </motion.h1>

          <motion.h2
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-lg sm:text-xl font-semibold mb-2 text-center text-blue-300"
          >
            A Freelance Web Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-[10px] sm:text-xs mb-4 text-gray-300 text-center font-semibold leading-snug"
          >
            Crafting Stunning & Animated Websites for Businesses
          </motion.p>

          {/* About Me */}
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mb-3"
          >
            <h2 className="font-bold text-xs sm:text-sm mb-1 text-pink-400 border-b border-gray-600 pb-1">
              About Me
            </h2>
            <p className="text-gray-300 text-[10px] sm:text-xs leading-snug text-justify">
              I help businesses grow online by creating functional, visually
              appealing, and animated websites that leave a lasting impression.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mb-3"
          >
            <h2 className="font-bold text-xs sm:text-sm mb-1 text-pink-400 border-b border-gray-600 pb-1">
              Contact
            </h2>
            <p className="flex items-center gap-1 text-gray-300 text-[10px] sm:text-xs leading-snug">
              ✉️ vjcse12@gmail.com
            </p>
            <p className="flex items-center gap-1 text-gray-300 text-[10px] sm:text-xs leading-snug">
              📞 +91 8433421051
            </p>
            <p className="flex items-center gap-1 text-gray-300 text-[10px] sm:text-xs leading-snug">
              📍 Muzaffarnagar, UP, India
            </p>
          </motion.div>

          {/* Portfolio */}
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="mb-3"
          >
            <h2 className="font-bold text-xs sm:text-sm mb-1 text-pink-400 border-b border-gray-600 pb-1">
              Portfolio
            </h2>
            <a
              href="https://www.vishalkaushik.com/"
              target="_blank"
              className="text-indigo-400 hover:text-purple-400 font-semibold text-[10px] sm:text-xs underline transition-colors duration-300"
            >
              💻 Visit my Website
            </a>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <h2 className="font-bold text-xs sm:text-sm mb-1 text-pink-400 border-b border-gray-600 pb-1">
              Connect
            </h2>

            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mt-2">
              <a
                href="https://www.instagram.com/visualcodecraft"
                target="_blank"
                className="text-[#E4405F] hover:text-[#FF6F91] font-semibold text-[10px] sm:text-xs transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/vishal-kaushik-891653261"
                target="_blank"
                className="text-[#0A66C2] hover:text-[#4B9BFF] font-semibold text-[10px] sm:text-xs transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576776659499"
                target="_blank"
                className="text-[#1877F2] hover:text-[#4B8FFF] font-semibold text-[10px] sm:text-xs transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="https://vishalkakda.medium.com/"
                target="_blank"
                className="text-[#FF6D00] hover:text-[#FFA040] font-semibold text-[10px] sm:text-xs transition-colors duration-300"
              >
                Medium
              </a>
              <a
                href="https://x.com/thevishalcraft"
                target="_blank"
                className="text-[#1DA1F2] hover:text-[#4BB1FF] font-semibold text-[10px] sm:text-xs transition-colors duration-300"
              >
                X / Twitter
              </a>
              <a
                href="https://github.com/vkakda"
                target="_blank"
                className="text-[#9CA3AF] hover:text-[#FFFFFF] font-semibold text-[10px] sm:text-xs transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
