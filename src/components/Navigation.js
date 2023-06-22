import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import logo from "../assets/Pokédex_logo.png";
import { BsBookmarkHeart } from "react-icons/bs";

const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(PokemonContext);

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });

    onResetForm();
  };

  return (
    <>
      <header className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo Pokedex" />
        </Link>
        <div className="">
          <button className="btn-search">
            <BsBookmarkHeart fontSize={20} />

            <span className="" style={{ fontSize: "16px", cursor: "pointer" }}>
              Bookmark
            </span>
          </button>
        </div>

        <form onSubmit={onSearchSubmit}>
          <div className="form-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-search"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="search"
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Search Pokemon Name"
            />
          </div>

          <button className="btn-search" disabled={!valueSearch}>
            Search
          </button>
        </form>
      </header>

      <Outlet />
    </>
  );
};

export default Navigation;
