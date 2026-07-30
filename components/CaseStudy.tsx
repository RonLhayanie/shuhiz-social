'use client';

import { CheckCircle2, TrendingUp, Globe, Target } from 'lucide-react';

// A single media item (image or video)
interface MediaItem {
  type: 'image' | 'video';
  src: string;
}

interface CaseStudyProps {
  id: string;
  clientName: string;
  subtitle: string;
  category: string;
  location?: string;
  challenge: string;
  whatIDid: string[];
  results: { value: string; label: string }[];
  quote?: string;
  logo: string;
  // Media is passed as one array instead of separate mainImage / secondaryMedia props
  mediaItems: MediaItem[];
  themeColor?: string;
  concept?: string;
  // Controls whether the circular side logo is rendered
  showCircularLogo?: boolean; 
}

export default function CaseStudy({ 
  clientName, subtitle, category, location, challenge, whatIDid, results, quote, logo, mediaItems, concept, themeColor = "#F0C9D9", showCircularLogo = true
}: CaseStudyProps) {
  
  // Picks grid classes based on how many media items there are
  const getGridClass = (count: number) => {
    if (count === 1) return 'grid-cols-1 max-w-md';
    if (count === 2) return 'grid-cols-2 max-w-lg';
    if (count === 3) return 'grid-cols-3 max-w-2xl';
    return 'grid-cols-2'; // Default
  };

  const gridClass = getGridClass(mediaItems.length);

  return (
    <section className="py-24 bg-[#FAF9F6] overflow-hidden border-b border-gray-200 last:border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Right column: copy and metrics */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
                <div className="flex items-center gap-3 mb-3">
                    <span 
                      className="px-4 py-1 rounded-full text-sm font-bold border"
                      style={{ backgroundColor: `${themeColor}20`, borderColor: themeColor, color: '#704724' }}
                    >
                        {category}
                    </span>
                    {location && (
                      <span className="flex items-center gap-1 text-gray-500 text-sm font-medium">
                          <Globe size={14} />
                          {location}
                      </span>
                    )}
                </div>
                <h2 className="text-5xl md:text-7xl font-black leading-none mb-2" style={{ color: themeColor }}>
                    {clientName}
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#704724]">
                    {subtitle}
                </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="flex items-center gap-2 text-xl font-bold text-[#704724] mb-3">
                    <Target style={{ color: themeColor }} />
                    האתגר
                </h4>
                <p className="text-gray-600 leading-relaxed">
                    {challenge}
                </p>
            </div>

            <div>
                <h4 className="text-xl font-bold text-[#704724] mb-4 border-b-2 w-fit pb-1" style={{ borderColor: themeColor }}>
                    מה עשיתי?
                </h4>
                <ul className="space-y-3">
                    {whatIDid.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700">
                            <CheckCircle2 size={20} className="text-[#704724] mt-1 shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-[#704724] text-white p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                    <h4 className="flex items-center gap-2 text-2xl font-black mb-6" style={{ color: themeColor }}>
                        <TrendingUp />
                        תוצרים ותוצאות
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {results.map((res, idx) => (
                          <div key={idx}>
                              <span className="block text-xl md:text-2xl font-black mb-1 leading-tight" style={{ color: themeColor }}>{res.value}</span>
                              <span className="text-sm opacity-80">{res.label}</span>
                          </div>
                        ))}
                    </div>
                </div>
            </div>

          </div>

          {/* Left column: creative and media */}
          <div className="relative h-full min-h-[500px] flex flex-col items-center justify-center order-1 lg:order-2">
            
            {/* Decorative background: with no circular logo, the logo renders here large and translucent */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-3xl -z-10 opacity-20 bg-no-repeat bg-center bg-contain"
              style={{ 
                backgroundColor: themeColor,
                backgroundImage: !showCircularLogo ? `url(${logo})` : 'none',
                opacity: !showCircularLogo ? 0.1 : 0.2
              }}
            ></div>

            {/* Circular logo, rendered only when showCircularLogo is true */}
            {showCircularLogo && (
              <div className="w-40 h-40 bg-white rounded-full shadow-xl flex items-center justify-center p-4 border-4 mb-8 z-20 relative hover:scale-105 transition-transform duration-500" style={{ borderColor: `${themeColor}40` }}>
                  <img 
                      src={logo} 
                      alt={`${clientName} Logo`} 
                      className="w-full h-full object-contain"
                  />
              </div>
            )}

            {/* Media grid */}
            <div className={`grid ${gridClass} gap-4 w-full z-10 items-center`}>
                {mediaItems.map((item, index) => {
                  // Slight rotation applied to each grid item
                  const rotation = mediaItems.length > 1 ? (index % 2 === 0 ? -3 : 3) : 0;
                  
                  return (
                    <div 
                      key={index} 
                      className={`transform hover:rotate-0 transition-transform duration-500 hover:z-30 relative group rounded-xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]`}
                      style={{ transform: `rotate(${rotation}deg)` }}
                    >
                        {item.type === 'video' ? (
                          <video 
                            src={item.src}
                            className="w-full h-full object-cover"
                            autoPlay loop muted playsInline
                          />
                        ) : (
                          <img 
                              src={item.src} 
                              alt={`Creative ${index + 1}`}
                              className="w-full h-full object-cover"
                          />
                        )}
                         {/* Hover lighten effect */}
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none"></div>
                    </div>
                  );
                })}
            </div>
            
            {concept && (
              <div className="mt-12 text-center z-20 relative">
                  <p className="text-[#704724] font-bold text-sm bg-white px-4 py-2 rounded-full shadow-sm inline-block transform -rotate-2 border border-gray-100">
                      ✨ {concept}
                  </p>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}