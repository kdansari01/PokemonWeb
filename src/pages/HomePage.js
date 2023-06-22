import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import PokemonList from "../components/PokemonList";

export const HomePage = () => {
  const { onClickLoadMore } = useContext(PokemonContext);

  return (
    <>
      <div className="container-filter container"></div>
      <PokemonList />
      <div className="container-btn-load-more container">
        <button className="btn-load-more" onClick={onClickLoadMore}>
          Load More
        </button>
      </div>
    </>
  );
};
