import React, { useState } from "react";

const SearchBar = ({ onSubmit, count }) => {
  const [term, setSearchText] = useState("");

  const onChangeSearchString = event => {
    setSearchText(event.target.value);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onFormSubmit}>
        <h3>Video Search on YouTube</h3>
        <div className="ui fluid action input">
          <input
            type="text"
            placeholder="Search..."
            value={term}
            onChange={onChangeSearchString}
          />
          <button className="ui icon button" type="submit">
            <i className="search icon"></i>
          </button>
        </div>
        <div style={{ textAlign: "center" }}>{count} videos find.</div>
      </form>
    </div>
  );
};

export default SearchBar;
