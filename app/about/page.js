'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function About() {

  const [isOpen, setIsOpen] = useState(false);

  const readMore = () => {



  }
  return (
    <section id="about" className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-sm md:text-base font-light tracking-widest text-amber-600 mb-4">
            ABOUT ME
          </p>
          <h2 className="text-white text-5xl md:text-6xl font-light mb-6">
            Video Editor
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left - Text */}
          <div className="space-y-6">

            {/* Main Text */}
            <p className="text-gray-400 font-light leading-relaxed text-lg">
              I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.
            </p>

            {/* Expandable Content - With Smooth Animation */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
              <p className="text-gray-400 font-light leading-relaxed text-lg pt-6 border-t border-gray-800">
                This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
              </p>
            </div>

            {/* Read More/Less Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-600 hover:text-amber-500 text-sm font-light tracking-widest transition-colors duration-300 inline-flex items-center gap-2 group"
            >
              <span>{isOpen ? 'Read less' : 'Read more'}</span>
              <span className={` group-hover:translate-x-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                →
              </span>
            </button>

            {/* Download CV - Appears when expanded */}
            {isOpen && (
              <div className="pt-6 border-t border-gray-800 animate-fadeIn">
                <Link
                  href="#contact"
                  className="text-amber-600 hover:text-amber-500 text-sm font-light tracking-widest transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span>Download CV</span>
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

            <video
              src="/about/rain.mp4"
              className="w-full h-96 object-cover"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Optional: Add a subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
