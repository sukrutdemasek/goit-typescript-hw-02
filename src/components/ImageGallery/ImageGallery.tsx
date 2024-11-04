import ImageCard from "../ImageCard/ImageCard";
import "./ImageGallery.css";
import React from "react";
import { Image } from "../../App";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className="imageList">
      {images.map((queryResult) => (
        <li key={queryResult.id}>
          <ImageCard
            image={queryResult}
            onClick={() => onImageClick(queryResult)}
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
