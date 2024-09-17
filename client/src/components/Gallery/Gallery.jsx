import React from "react";
import { ImageGallery } from "react-image-grid-gallery";
import GalleryImg1 from "../../assets/gallery/g1.jpg";
import GalleryImg3 from "../../assets/gallery/g3.jpg";
import GalleryImg4 from "../../assets/gallery/g4.jpg";
import GalleryImg6 from "../../assets/gallery/g6.jpg";
import GalleryImg7 from "../../assets/gallery/g7.jpg";
import GalleryImg8 from "../../assets/gallery/g8.jpg";
import GalleryImg9 from "../../assets/gallery/g9.jpg";
import GalleryImg10 from "../../assets/gallery/g10.jpg";
import GalleryImg11 from "../../assets/gallery/g11.jpg";
import GalleryImg12 from "../../assets/gallery/g12.jpg";

const Gallery = () => {
  const imagesArray = [
    {
      alt: "Image1's alt text",
      caption: "Gift Habeshaw",
      src: GalleryImg1,
    },
    {
        alt: "Image2's alt text",
        caption: "Dmitriy Frantsev",
        src: GalleryImg3,
    },
    {
        alt: "Image3's alt text",
        caption:  "Jaipur , Rajasthan India",
        src: GalleryImg4,
    },
    {
        alt: "Image1's alt text",
        caption: "Gift Habeshaw",
        src: GalleryImg6,
    },
    {
        alt: "Image2's alt text",
        caption: "Dmitriy Frantsev",
        src: GalleryImg7,
    },
    {
        alt: "Image1's alt text",
        caption: "Gift Habeshaw",
        src: GalleryImg8,
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: GalleryImg9,
    },
    {
        alt: "Image3's alt text",
        caption: "Rann of kutch , India",
        src: GalleryImg10,
    },
    {
      alt: "Image3's alt text",
      caption:  "Jaipur , Rajasthan India",
      src: GalleryImg11,
    },
    { 
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: GalleryImg12,
    },
  ];
  return (
    <ImageGallery
      imagesInfoArray={imagesArray}
      columnCount={"auto"}
      columnWidth={200}
      gapSize={20}
    />
  );
};

export default Gallery;
