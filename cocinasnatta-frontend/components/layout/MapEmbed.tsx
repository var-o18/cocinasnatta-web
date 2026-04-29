import React from "react";

const MapEmbed = () => {
  return (
    <div className="w-full h-[320px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 group relative shadow-2xl">

      <a href="https://www.google.com/maps/place/?q=place_id:ChIJu9t1wIKjYw0RkfQOCbcrSkc" target="_blank" className="absolute inset-0 z-20"/>

      <iframe src="https://www.google.com/maps?q=38.1042343,-0.8588461&z=17&t=h&output=embed"
        className="w-full h-full scale-105 group-hover:scale-110 transition-all duration-700 ease-out pointer-events-none" loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

      <div className="absolute bottom-4 left-4 z-30 flex flex-col gap-2">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white hover:text-black transition-all duration-300">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Cómo llegar
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-black via-black/10 to-transparent z-20 pointer-events-none" />
    </div>
  );
};

export default MapEmbed;