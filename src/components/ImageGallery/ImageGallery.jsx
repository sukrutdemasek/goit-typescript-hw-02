import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ queryResults }) {
  return (
    <ul>
      {queryResults.length !== 0 &&
        queryResults.map((queryResult) => {
          return (
            <li key={queryResult.id}>
              <ImageCard src={queryResult.src} />
            </li>
          );
        })}
    </ul>
  );
}
