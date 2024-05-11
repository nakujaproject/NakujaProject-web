import React from "react";
import {
  work,
  n2pcb,
  spacexpo,
  srmstand,
  dprinter,
  nakujaksa,
} from "../assets/imageCollage";

const ImageCollage = () => {
  const images = [work, srmstand, n2pcb, spacexpo, dprinter, nakujaksa];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {images.slice(0, 6).map((image, index) => (
        <div
          key={index}
          className="relative rounded-lg overflow-hidden"
          style={{ paddingBottom: "40%" }}
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCollage;
