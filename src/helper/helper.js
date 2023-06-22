import React from "react";

const PrimerMayuscula = ({ word }) => {
  const capitalize = (word) => {
    return word[0].toUpperCase() + word.substring(1);
  };

  return <span>{capitalize(word)}</span>;
};

export default PrimerMayuscula;
