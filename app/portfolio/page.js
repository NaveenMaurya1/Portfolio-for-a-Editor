'use client';
import { useState } from 'react';
import BlurFade from '@/components/ui/BlurFadeText';
import AnimatedModal from '@/components/ui/AnimatePresence';
export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Wedding Video',
      category: 'MUSIC-VIDEO',
      image: 'https://res.cloudinary.com/zz6gfdix/image/upload/v1790274208/file_000000003ef0820bbeff4f024310f0fc.png',
      video: 'https://res.cloudinary.com/zz6gfdix/video/upload/v1789928832/wedding_2.mp4',
      description: 'Wedding video for a Client - Romance genre',
      genre: 'Music Video',
      duration: '00:39',
      crew: {
         Editor: "Ajay M."
        // director: 'Daniel Russo',
        // cinematographer: 'Daniel Russo',
        // producer: 'Alex Smith'
      }
    },
    {
      id: 2,
       title: 'Cinematice Shots',
      category: 'NARRATIVE',
      image: 'https://res.cloudinary.com/zz6gfdix/image/upload/v1790274215/file_00000000f4d081f5b774c07c56b7c679.png',
      video: 'https://res.cloudinary.com/zz6gfdix/video/upload/v1789928564/decor_type.mp4',
      description: 'A cinematic shots of decoration in a Wedding.',
      genre: 'Documentary',
      duration: '00:43',
      crew: {
          Editor: "Ajay M.",
        // director: 'Daniel Russo',
        // cinematographer: 'Daniel Russo',
        // producer: 'John Doe'
      }
    },
    {
      id: 3,
      title: 'BRAND STORY',
      category: 'COMMERCIAL',
      image: 'https://res.cloudinary.com/zz6gfdix/image/upload/v1790274219/file_00000000614481faa704d1ee801b0fae.png',
      video: 'https://res.cloudinary.com/zz6gfdix/video/upload/v1789928584/iphone_simple_intro.mp4',
      description: 'Corporate storytelling for Apple Phones',
      genre: 'Commercial',
      duration: '00:15',
      crew: {
         Editor: "Ajay M."
        // director: 'Daniel Russo',
        // cinematographer: 'Daniel Russo',
        // producer: 'Jane Doe'
      }
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-black py-20 px-4 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto space-y-16">

        {portfolioItems.map((item, idx) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-8 items-center"
          >

            {/* Video Thumbnail */}
            <BlurFade
              delay={idx * 0.15}
              duration={0.8}
              y={30}
              className="w-full md:w-1/2"
            >
              <div
                className="relative group cursor-pointer"
                onClick={() => setSelectedVideo(item)}
              >
              <div className="w-full h-96 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-500"
                />
              </div>

                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 ml-1 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Content */}
            <BlurFade
              delay={idx * 0.15 + 0.2}
              duration={0.8}
              y={30}
              className="w-full md:w-1/2"
            >
              <div>
                <p className="text-xs font-light tracking-widest text-amber-600 mb-2">
                  {item.category}
                </p>

                <h3 className="text-white text-4xl md:text-5xl font-light mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 font-light mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8 py-8 border-t border-gray-800">
                  <div>
                    <p className="text-xs font-light tracking-widest text-gray-500 mb-1">
                      Genre: {item.genre}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-light tracking-widest text-gray-500 mb-1">
                      Duration: {item.duration}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedVideo(item)}
                  className="flex items-center gap-2 text-amber-600 hover:text-white transition-colors group"
                >
                  <span className="text-sm font-light tracking-widest">
                    PLAY VIDEO
                  </span>

                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </BlurFade>

          </div>
        ))}
      </div>

      {/* Video Modal */}
      <AnimatedModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      >
        <div>

          {/* Video */}
          <div className="relative pb-[56.25%] bg-black overflow-hidden">
            <video
              autoPlay
              controls
              className="absolute inset-0 w-full h-full"
              src={selectedVideo?.video}
            />
          </div>

          {/* Video Information */}
          <div className="bg-black border-t border-gray-800 p-8">

            <div className="flex justify-between items-start mb-6">

              <div>
                <p className="text-amber-600 text-xs font-light tracking-widest mb-2">
                  {selectedVideo?.category}
                </p>

                <h3 className="text-white text-3xl font-light">
                  {selectedVideo?.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

            </div>

            {/* Description */}
            <p className="text-gray-400 mb-8 font-light leading-relaxed max-w-3xl">
              {selectedVideo?.description}
            </p>

            {/* Crew Info */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

              {selectedVideo &&
                Object.entries(selectedVideo.crew).map(([role, name]) => (
                  <div key={role}>
                    <p className="text-xs font-light text-gray-600 mb-1 uppercase">
                      {role}
                    </p>
                    <p className="text-white font-light">
                      {name}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </AnimatedModal>
    </section>
  );
}
