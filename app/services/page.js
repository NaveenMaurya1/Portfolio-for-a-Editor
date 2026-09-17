'use client'
import Image from "next/image";
import BlurFade from "@/components/ui/BlurFadeText";
export default function Services() {
  const services = [
    {
      image: "/services_image/Narrative.avif",
      title: "NARRATIVE",
      description: "Feature-length and short films with compelling storytelling",
    },
    {
      image: "/services_image/Commercial.avif",
      title: "COMMERCIAL",
      description: "Professional advertising content and brand storytelling",
    },
    {
      image: "/services_image/Music.avif",
      title: "MUSIC-VIDEO",
      description: "Creative visual storytelling for musicians and artists",
    },
  ];

  return (
    
    <section className="bg-gray-300 text-back py-20 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
      <BlurFade>

        <div className="grid md:grid-cols-3 gap-12">

          {services.map((service, idx) => (
            <div key={idx} className="text-center">

              {/* YOUR IMAGE */}
              <div className="mb-6 flex justify-center ">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-20 h-20 object-contain transition duration-300 hover:invert-50 cursor-pointer"
                   width={1200}
                   height={700}
                   
                />
              </div>

              <h3 className="text-xl font-bold mb-4 tracking-wider">
                {service.title}
              </h3>

              <p className="text-gray-900 tracking-wider leading-6 italic" >
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </BlurFade>
      </div>
    </section>
  );
}