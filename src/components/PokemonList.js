import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import CardPokemon from "./CardPokemon";
import { Loader } from "./Loader";

const PokemonList = () => {
  const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-list-pokemon container">
          {filteredPokemons.length ? (
            <>
              {filteredPokemons.map((pokemon, ind) => (
                <CardPokemon pokemon={pokemon} key={ind + 1} />
              ))}
            </>
          ) : (
            <>
              {allPokemons.map((pokemon, ind) => (
                <CardPokemon pokemon={pokemon} key={ind + 1} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default PokemonList;
