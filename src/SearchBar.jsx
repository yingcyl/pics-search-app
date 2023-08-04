import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ formSubmit }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formSubmit(text);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Enter search term: </label>
        <input type="text" onChange={handleChange} value={text} id="search" />
      </form>
    </div>
  );
}
