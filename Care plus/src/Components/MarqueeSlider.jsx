import React from "react";

const MarqueeSlider = () => {
  const images = [
    "https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/6635d5dd0edfd934c9b7cc4e_instagram-thumb-12.jpg",
    "https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/6635d5d5181511164cfbf93e_instagram-thumb-07.jpg",
    "https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/6631cc57f4c808f5ab8b31b9_instagram-thumb-01.jpg",
    "https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/6631cc58feedac0abc2e5f07_instagram-thumb-04.jpg",
    "https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/6631cc58feedac0abc2e5f07_instagram-thumb-04.jpg",
    "https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/6631cc58feedac0abc2e5f07_instagram-thumb-04.jpg",
    "https://cdn.prod.website-files.com/65f19ff47c0ac41abb16b0fa/6631cc58feedac0abc2e5f07_instagram-thumb-04.jpg",
  ];

  return (
    <div className="relative overflow-hidden w-full h-80">
      <div className="flex animate-marquee space-x-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-80 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}

        {/* Duplicate images for the looping effect */}
        {images.map((image, index) => (
          <div
            key={`duplicate-${index}`}
            className="min-w-full h-80 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default MarqueeSlider;
