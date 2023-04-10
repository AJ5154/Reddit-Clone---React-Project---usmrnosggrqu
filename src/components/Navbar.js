import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch, faSearch } from "react-icons/fa";

const Navbar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <span>
            <img
              src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
              alt="reddit"
            />
          </span>
        </div>

        <div className="search-bar">
          <span>
            <div className="input-wrapper">
              <FaSearch id="search-icon" />
              <input
                type="text"
                placeholder="Search Reddit"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />
            </div>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
