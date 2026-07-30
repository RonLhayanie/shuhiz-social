'use client';

export default function PortfolioVideos() {
  const videos = [
    "https://by-shuhiz.my.canva.site/21/_assets/video/7e92d69db2f25b7a6e081a98c3e95ef5.mp4",
    "https://by-shuhiz.my.canva.site/21/_assets/video/d8da57c582a7c94b4be39c436748048c.mp4",
    "https://by-shuhiz.my.canva.site/21/_assets/video/19c4c3f934000b403d5af3159a575095.mp4",
    "https://by-shuhiz.my.canva.site/21/_assets/video/85fc97519f9dfce34eda1ff86cb9e4c7.mp4",
    "https://by-shuhiz.my.canva.site/21/_assets/video/3b8db0cead83533090021d84776b45cf.mp4"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section heading */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#704724] mb-4">
              סרטוני אווירה ועסקים
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              תוכן וידאו מדויק שתופס את העין ומעביר את המסר בשניות הראשונות.
            </p>
        </div>

        {/* Clean grid, no phone frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {videos.map((src, index) => (
            <div 
              key={index} 
              className="group relative aspect-[9/16] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* The video element */}
              <video 
                src={src}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                controls
                playsInline
                preload="metadata"
              ></video>

              {/* Subtle inner border effect */}
              <div className="absolute inset-0 rounded-2xl border border-black/5 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}