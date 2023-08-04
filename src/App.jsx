import { useState } from "react";

import "./App.css";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import searchImages from "./api";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <>
      <SearchBar formSubmit={handleSubmit} />
      <ImageList images={images} />
    </>
  );
}

export default App;
