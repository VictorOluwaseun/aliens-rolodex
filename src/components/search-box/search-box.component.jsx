import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ onChange, placeholder }) => {
 return (
  <input
   className="search"
   type="search"
   placeholder={placeholder}
   onChange={onChange}
  />
 );
};

export default SearchBox;
