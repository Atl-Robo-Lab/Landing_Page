import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const videos = [
    {
      id: 1,
      title: "3D Printing Innovation",
      thumbnail: "/api/placeholder/400/300",
      description: "Students exploring 3D printing technology",
      videoId: "y63x4kjvAc0",
    },
    {
      id: 2,
      title: "Programming & Coding",
      thumbnail: "/api/placeholder/400/300",
      description: "Young minds learning programming concepts",
      videoId: "y63x4kjvAc0",
    },
    {
      id: 3,
      title: "Robotics Workshop",
      thumbnail: "/api/placeholder/400/300",
      description: "Hands-on robotics learning experience",
      videoId: "y63x4kjvAc0",
    },
    {
      id: 4,
      title: "Creative Technology",
      thumbnail: "/api/placeholder/400/300",
      description: "Innovation through creative thinking",
      videoId: "y63x4kjvAc0",
    },
    {
      id: 5,
      title: "STEM Education",
      thumbnail: "/api/placeholder/400/300",
      description: "Science and technology integration",
      videoId: "y63x4kjvAc0",
    },
    {
      id: 6,
      title: "Digital Learning",
      thumbnail: "/api/placeholder/400/300",
      description: "Modern digital education methods",
      videoId: "y63x4kjvAc0",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleVideoClick = (videoId) => {
    // Open YouTube video in new tab
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/90 to-purple-50/80"></div>

        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[16rem] font-black text-gray-100/15 select-none whitespace-nowrap transform -rotate-12">
            VIDEOS
          </div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-100/40 to-indigo-100/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-purple-100/30 to-pink-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.35, 0.15],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg mb-6 sm:mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <span className="text-xl sm:text-2xl">📹</span>
            <span className="font-semibold text-gray-700 text-sm sm:text-base">Student Stories</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            INNOVATION IN
            <span className="block bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              ACTION
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We are bringing culture of Innovation and Creativity among students
            at very early stage.
          </motion.p>
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              className="group relative cursor-pointer"
              variants={cardVariants}
              onClick={() => handleVideoClick(video.videoId)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl bg-white">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  {/* Placeholder for actual video thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-20"></div>

                  {/* YouTube Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* CSS Play Icon */}
                      <div className="w-0 h-0 border-l-[10px] sm:border-l-[14px] lg:border-l-[16px] border-l-white border-t-[8px] sm:border-t-[10px] lg:border-t-[12px] border-t-transparent border-b-[8px] sm:border-b-[10px] lg:border-b-[12px] border-b-transparent ml-1"></div>
                    </motion.div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>

                {/* Video Info */}
                <div className="p-3 sm:p-4 lg:p-6">
                  <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 sm:line-clamp-none">{video.description}</p>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-blue-300 transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open("https://www.youtube.com/@yourychannel", "_blank")
            }
          >
            <span className="text-xl sm:text-2xl">📺</span>
            <span>Visit Our YouTube Channel</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
