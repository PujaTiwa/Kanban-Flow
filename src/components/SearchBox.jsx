/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../utils/Redux/searchSlice";

const SearchBox = () => {
  const [Searchinput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  dispatch(setSearchTerm(Searchinput));
  return (
    <div className="search-box mx-6 md:mx-60 border-2 border-none rounded-md">
      <input
        className="outline-none"
        type="text"
        placeholder="Search tasks..."
        value={Searchinput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
