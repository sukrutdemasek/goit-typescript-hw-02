import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import React from "react";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

function App(): JSX.Element {
  const [images, setImages] = useState<Image[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [imagePressed, setImagePressed] = useState<Image | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=TVPpFM_G6vR_MlQIY-i6HlxdvA9b3eAuS-Uq9QY4X8A`
        );
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch {
        setError("Error");
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = (results: string) => {
    if (results.trim() === "") {
      toast.error("Enter a search term");
      return;
    }
    setQuery(results);
    setImages([]);
    setPage(1);
  };

  const openModal = (image: Image) => {
    setImagePressed(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setImagePressed(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      <Toaster />
      {error && <ErrorMessage />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn loadMore={() => setPage((page) => page + 1)} />
      )}
      {imagePressed && <ImageModal onClose={closeModal} image={imagePressed} />}
    </div>
  );
}

export default App;
export type { Image };
