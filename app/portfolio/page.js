
'use client';
import { useState } from 'react';

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'HIGHEST PEAK',
      category: 'NARRATIVE',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      video: '/about/rain.mp4',
      description: 'A cinematic journey through breathtaking landscapes',
      genre: 'Documentary',
      duration: '12:45',
      crew: { director: 'Daniel Russo', cinematographer: 'Daniel Russo', producer: 'John Doe' }
    },
    {
      id: 2,
      title: 'BRAND STORY',
      category: 'COMMERCIAL',
      image: 'https://images.unsplash.com/photo-1485095329183-d0797cdc5676?w=1200&h=800&fit=crop',
      video: 'https://videos.pexels.com/video-files/7991491/7991491-hd_1920_1080_30fps.mp4',
      description: 'Corporate storytelling for global brands',
      genre: 'Commercial',
      duration: '00:60',
      crew: { director: 'Daniel Russo', cinematographer: 'Daniel Russo', producer: 'Jane Doe' }
    },
    {
      id: 3,
      title: 'ANDROMEDA',
      category: 'MUSIC-VIDEO',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=800&fit=crop',
      video: 'https://videos.pexels.com/video-files/7991491/7991491-hd_1920_1080_30fps.mp4',
      description: 'Music video for indie artist - Romance genre',
      genre: 'Music Video',
      duration: '04:30',
      crew: { director: 'Daniel Russo', cinematographer: 'Daniel Russo', producer: 'Alex Smith' }
    },
  ];

  return (
    <section id="portfolio" className="bg-black py-20 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {portfolioItems.map((item, idx) => (
          <div key={item.id} className="flex flex-col md:flex-row gap-8 items-center">
            
            {/* Video Thumbnail */}
            <div className="w-full md:w-1/2 relative group cursor-pointer" onClick={() => setSelectedVideo(item)}>
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-96 object-cover group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <p className="text-xs font-light tracking-widest text-amber-600 mb-2">
                {item.category}
              </p>
              <h3 className="text-4xl md:text-5xl font-light mb-4">
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
                <span className="text-sm font-light tracking-widest">PLAY VIDEO</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative pb-[56.25%] bg-black">
              <video
                autoPlay
                controls
                className="absolute inset-0 w-full h-full"
                src={selectedVideo.video}
              />
            </div>
            
            <div className="bg-black border-t border-gray-800 p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-amber-600 text-xs font-light tracking-widest mb-2">
                    {selectedVideo.category}
                  </p>
                  <h3 className="text-3xl font-light">
                    {selectedVideo.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-gray-400 mb-8 font-light leading-relaxed max-w-3xl">
                {selectedVideo.description}
              </p>

              {/* Crew Info */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {Object.entries(selectedVideo.crew).map(([role, name]) => (
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
        </div>
      )}
    </section>
  );
}

