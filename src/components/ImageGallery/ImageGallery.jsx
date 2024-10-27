import ImageCard from "../ImageCard/ImageCard";
import "./ImageGallery.css";
export default function ImageGallery({ queryResults, onImageClick }) {
  return (
    <ul className="imageList">
      {queryResults.map((queryResult) => (
        <li key={queryResult.id}>
          <ImageCard
            image={queryResult}
            onClick={() => onImageClick(queryResult)}
          />
        </li>
      ))}
    </ul>
  );
}
