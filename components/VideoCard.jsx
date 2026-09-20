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
            <AnimatedModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >


                {/* Video */}
                <div className="relative aspect-video bg-black overflow-hidden">
                    <video
                        src={video.videoUrl}
                        title={video.title}
                        autoPlay
                        controls
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-contain"
                    />
                </div>

                {/* Video Information */}
                <div className="bg-black border-t border-gray-800 p-6 md:p-8">

                    {/* Title + Close */}
                    <div className="flex justify-between items-start mb-6 gap-4">

                        <div>
                            <p className="text-amber-600 text-xs font-light tracking-widest mb-2">
                                {video.category}
                            </p>

                            <h3 className="text-white text-2xl md:text-3xl font-light">
                                {video.title}
                            </h3>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="shrink-0 text-gray-400 hover:text-white transition-colors"
                            aria-label="Close video"
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
                        {video.description}
                    </p>

                    {/* Crew Information */}
                    {video.crew && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">

                            {Object.entries(video.crew).map(([role, name]) => (
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
                    )}

                </div>
            </AnimatedModal>
        </article>
    );
}