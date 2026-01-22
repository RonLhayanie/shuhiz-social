import { MoreHorizontal } from 'lucide-react';

export default function InstagramFeed() {
  const posts = [
    {
      title: "שיתופי פעולה",
      img: "https://by-shuhiz.my.canva.site/21/_assets/media/1224861ec90e0cb023f202b6b62bfe57.png",
    },
    {
      title: "שילוב טרנדים",
      img: "https://by-shuhiz.my.canva.site/21/_assets/media/f71caa2ad2032aca265575e2d6d83c9e.png",
    },
    {
      title: "סושיאל כלות",
      img: "https://by-shuhiz.my.canva.site/21/_assets/media/1deddfa8645d9c9931812f9222e18e76.png",
    },
    {
      title: "יצירת מודעות",
      img: "https://by-shuhiz.my.canva.site/21/_assets/media/49d0a232d004788d4ff6db381c996b48.png",
    },
    {
      title: "תוכן מותאם לחגים ומועדים",
      img: "https://by-shuhiz.my.canva.site/21/_assets/media/12ac6982253d72819393613d83835c8f.png",
    },
    {
      title: "עיצוב גרפי בהתאמה",
      img: "https://by-shuhiz.my.canva.site/21/_assets/media/2ae7fbd21928fe021075fa181c2fe883.png",
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* קו מפריד */}
        <div className="w-full border-t-2 border-[#704724]/80 mb-16"></div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          
          {/* צד ימין: טקסט גדול */}
          <div className="w-full lg:w-1/3 text-center lg:text-right sticky top-32 self-start">
            <h2 className="text-5xl md:text-7xl font-black leading-tight text-[#F0C9D9]">
              רגעים<br/>
              <span className="text-[#F0C9D9]/50">שמסבירים</span><br/>
              אותי יותר טוב<br/>
              <span className="text-[#704724]">ממילים.</span>
            </h2>
            <div className="mt-8 flex justify-center lg:justify-start">
                 <div className="text-5xl text-[#704724]">✦</div>
            </div>
          </div>

          {/* צד שמאל: גריד הפוסטים */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <div key={index} className="flex flex-col">
                  
                  {/* כותרת מעל התמונה */}
                  <div className="py-2 text-center">
                    <h3 className="font-bold text-[#704724] text-lg tracking-wide">
                        {post.title}
                    </h3>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="aspect-[4/5] w-full bg-white">
                      {/* שיניתי כאן ל-object-contain כדי להבטיח שכל התמונה תופיע בלי חיתוכים */}
                      <img 
                        src={post.img} 
                        alt={post.title}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}