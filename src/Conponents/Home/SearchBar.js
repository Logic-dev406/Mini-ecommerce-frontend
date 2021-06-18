import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const history = useHistory();

  // console.log({ searchTerm });
  const handleInput = (e) => {
    const inputText = e.target.value;
    setSearchTerm(inputText);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      history.push(`/search?query=${searchTerm}`);
      setSearchTerm("");
    }
  };

  // const handleSearchClicked = (e) => {
  //   console.log(searchTerm);
  //   history.push(`/Search`);
  //   setSearchTerm("");
  // };

  return (
    <div className=" flex items-center px-5 w-full h-10 rounded bg-gray-200">
      <input
        className="w-full rounded bg-transparent focus:outline-none"
        onChange={handleInput}
        onKeyPress={handleEnterKeyPress}
        type="search"
        value={searchTerm}
        placeholder="Search Products"
      />
      <button
        // onClick={handleSearchClicked}
        className="focus:outline-none bg-transparent py-1 px-1 rounded-r"
      >
        <SearchIcon className="text-gray-500" />
      </button>
    </div>
  );
};

export default SearchBar;
