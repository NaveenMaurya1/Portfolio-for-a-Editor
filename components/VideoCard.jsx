"use client";

import Image from "next/image";
import { useState } from "react";

export default function VideoCard({ video }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="group">
      {/* Thumbnail */}
      <div
        className="relative aspect-video overflow-hidden bg-black cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
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

      {/* Info */}
      <div className="mt-4">
        <p className="text-xs tracking-[0.25em] text-gray-500">
          {video.category}
        </p>

        <h2 className="mt-2 text-xl font-medium">
          {video.title}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          {video.description}
        </p>
      </div>

      {/* Video modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </article>
  );
}