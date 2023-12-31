import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";

const CardPokemon = ({ pokemon }) => {
  const [Bookmark, setBookmark] = useState(false);
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="card-pokemon">
      <div className="card-img">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
        {!Bookmark ? <BsBookmarkHeart /> : <BsBookmarkHeartFill />}
      </div>
      <div className="card-info">
        <span className="pokemon-id">No. {pokemon.id}</span>
        <h3>{pokemon.name}</h3>
        <div className="card-types">
          {pokemon.types.map((type) => (
            <span key={type.type.name} className={type.type.name}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default CardPokemon;
