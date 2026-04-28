import React from "react";

const MapEmbed = () => {
  return (
    <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg grayscale hover:grayscale-0 transition-all duration-700">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m1!2sNatta%20Cocinas!2m2!1d-0.8122394!2d38.084132!5e0!3m2!1ses!2ses!4v1714300000000!5m2!1ses!2ses"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de Natta Cocinas"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
