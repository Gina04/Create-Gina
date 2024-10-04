import algoliasearch from "algoliasearch/lite";
import employees from "./db.json";
import React, { useState, useEffect } from "react";
import { Hits, InstantSearch, SearchBox, Stats,useInstantSearch } from "react-instantsearch";
import Hit from "../Hits/Hits";
import './Search.css'
// API Keys de Algolia
const REACT_APP_ALGOLIA_API_SEARCH_KEY = "5675460085896023bc029a8051dbfe25"; // Asegúrate de que estas son las credenciales correctas
const REACT_APP_ALGOLIA_APP_ID = "110SRGPQQM";

// Conexión con Algolia
const client = algoliasearch(
  REACT_APP_ALGOLIA_APP_ID,
  REACT_APP_ALGOLIA_API_SEARCH_KEY
);

const index = client.initIndex("dev_ecommerce");

//SAVE MANY
const saveMany = async () => {
  const result = await index.saveObjects(employees, {
    autoGenerateObjectIDIfNotExist: true,
  });
  console.log(result);
};

function EmptyQueryBoundary({ children, fallback }) {
  const { indexUiState } = useInstantSearch();

  if (!indexUiState.query) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }

  return children;
}

function Search() {

  return (
      
    <div className="relative ">
    <InstantSearch searchClient={client} indexName="dev_ecommerce">
      <SearchBox className="search-box"/>
      <div className="absolute left-0 w-full mt-2 z-10 ">
      <EmptyQueryBoundary fallback={null}>
        <Hits hitComponent={Hit}  className="flex flex-col" />
      </EmptyQueryBoundary>
      </div>
    </InstantSearch>

   
  </div>
   
  );
  
  /*
    <>
      <div id="app">
        <h1>Resultados de Búsqueda</h1>
        {/* Renderiza los resultados */ //}
  //{hits.length > 0 ? (
  //hits.map((hit, index) => (
  //<p key={index} dangerouslySetInnerHTML={{ __html: hit }} />
  //))
  //) : (
  //<p>No se encontraron resultados.</p>
  //)}
  //</div>
  //</>
}

//saveOne().catch(err=> concole.log(err));

//saveMany().catch((err) => console.log(err));
export default Search;
