
// app/components/Hero.jsx

'use client';
import BlurFade from "@/components/ui/BlurFadeText";
import ImageCarousel from "@/components/ui/ImageCarousel";
import AnimatedModal from "@/components/ui/AnimatePresence";
import { useState } from "react";
import Link from "next/link";

export default function Hero() {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);

  return (
    <section id="hero" className="group relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">

        {/* <Image
          className="w-full h-full object-cover transition-all duration-700"
          src={images[currentIndex]}
          alt="Hero background"
          fill
          priority
        /> */}

        {/* image Carousel for show images in loop */}
        <ImageCarousel onVideoChange={setCurrentVideo} />

      </div>

      {/* Content */}
      <div className="relative text-center z-10">
        <BlurFade delay={0}>

          <div className="font-extrabold text-lg md:text-5xl tracking-widest text-gray-300 mb-4 text-overflow:ellipsis">
            LATEST WORK
          </div>
        </BlurFade>

        <div className="flex gap-6 justify-center items-center mb-8">
          <BlurFade delay={0.15} className="flex gap-6 justify-center items-center mb-8">

            <button onClick={() => setSelectedVideo(currentVideo)} disabled={!currentVideo?.video} className="flex items-center gap-3 text-white hover:text-amber-600 transition-colors group">
              <div className="w-12 h-12 border-2 border-white group-hover:border-amber-600 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-sm font-light tracking-widest italic">Play Video</span>
            </button>

            {/* <button className="text-white hover:text-amber-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </button> */}
          </BlurFade>
        </div>
        <BlurFade delay={0.3}>
          <Link href="/videos" className="border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-black px-8 py-2 font-light tracking-widest text-sm transition-all duration-300">
            All Videos +          
          </Link>
        </BlurFade>
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

          </div>
        </div>

    </AnimatedModal>

    </section >
  );
}
