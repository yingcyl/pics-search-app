import { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={text} />
      </form>
    </div>
  );
}
