import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";
import BlurFade from "@/components/ui/BlurFadeText";

export default function VideosPage() {
    return (
        <main className="min-h-screen bg-[#c7bdb4] px-6 md:px-12 lg:px-20 py-24">

            {/* Header */}
            <section className="max-w-7xl mx-auto">

                <BlurFade delay={0.1} duration={0.8}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

                        <div>
                            <p className="text-xs tracking-[0.35em] text-gray-500">
                                MY WORK
                            </p>

                            <h1 className="mt-4 text-5xl md:text-7xl font-light tracking-tight">
                                VIDEOS
                            </h1>
                        </div>

                        <p className="max-w-md text-sm text-gray-600 leading-6">
                            A collection of narrative films, commercials and music videos
                            created through visual storytelling.
                        </p>

                    </div>
                </BlurFade>

                {/* <BlurFade delay={0.3} duration={0.8}> */}
                    {/* Divider */}
                    <div className="border-t border-black/20 mt-16" />

                    {/* Videos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-12">

                        {videos.map((video) => (
                            <VideoCard
                                key={video.id}
                                video={video}
                            />
                        ))}

                    </div>
                {/* </BlurFade> */}

            </section>

        </main>
    );
}