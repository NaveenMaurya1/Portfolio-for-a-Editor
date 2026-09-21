'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import AnimatedTextWord from "@/components/ui/AnimatedTextWord";
import BlurFade from "@/components/ui/BlurFadeText";
export default function About() {

  const [isOpen, setIsOpen] = useState(false);

  const readMore = () => {



  }
  return (
    <section id="about" className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <BlurFade>
            <p className="text-sm md:text-base font-light tracking-widest text-amber-600 mb-4">
              ABOUT ME
            </p>
            <h2 className="text-white text-5xl md:text-6xl font-light ">
              {""}
              <AnimatedTextWord
                words={[
                  "VIDEO EDITOR",
                  "FILMMAKER",
                  "STORYTELLER",

                ]}
                interval={2000}
              // className="font-medium"
              />
            </h2>
          </BlurFade>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left - Text */}

          <div className="space-y-6">
            <BlurFade>

              {/* Main Text */}
              <div className="pt-6 border-t border-gray-800">

                <TextGenerateEffect
                  words={`I am a passionate video editor focused on turning raw footage into engaging visual stories. I work across narrative films, commercials, music videos, and digital content, with a strong focus on pacing, emotion, and visual storytelling.`}

                  textClassName="text-gray-400 font-light leading-relaxed text-lg"

                  duration={0.3}
                  staggerDelay={0.08}
                />

              </div>
            </BlurFade>


            {/* Expandable Content - With Smooth Animation */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
              {isOpen && (
                <TextGenerateEffect
                  words={`For me, editing is more than simply putting clips together. It is about finding the right rhythm, creating an atmosphere, and making every cut serve the story. I carefully shape footage through timing, transitions, sound, and visual flow to create an experience that feels intentional and memorable.
                  Whether it is a cinematic story, a brand campaign, or a music-driven project, I approach every edit with attention to detail and a clear creative vision. My goal is simple: to transform good footage into something that connects with the audience.`}

                  textClassName="text-gray-400 font-light leading-relaxed text-lg pt-6 border-t border-gray-800"
                  duration={0.02}
                  staggerDelay={0.08}
                />
              )}

            </div>

            {/* Read More/Less Button */}
            <BlurFade>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-amber-600 hover:text-amber-500 text-sm font-light tracking-widest transition-colors duration-300 inline-flex items-center gap-2 group"
              >
                <span>{isOpen ? 'Read less' : 'Read more'}</span>
                <span className={` group-hover:translate-x-1 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                  →
                </span>
              </button>

            </BlurFade>

            {/* Download CV - Appears when expanded */}
            {isOpen && (
              <div className="pt-6 border-t border-gray-800 animate-fadeIn">
                <Link
                  href="View_Download/ajaypdfCV (2).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-500 text-sm font-light tracking-widest transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span>View CV</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            )}
          </div>

          {/* Right - Image */}
          <div className="relative group">
            {/* <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop"
              alt="Cinematographer at work"
              width={600}
              height={600}
              className="w-full h-96 object-cover transition-opacity duration-300 group-hover:opacity-90"
            /> */}
            <BlurFade>

              <video
                src="https://res.cloudinary.com/zz6gfdix/video/upload/v1789902426/idea.mp4"
                className="w-full h-96 object-cover"
                autoPlay
                muted
                loop
                playsInline
              />

            </BlurFade>

            {/* Optional: Add a subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
