import algoliasearch from "algoliasearch/lite";
import employees from "./db.json";
import React, { useState, useEffect } from "react";
import "./ListaMuebleAlgolia.css";
import {
  Hits,
  InstantSearch,
  SearchBox,
  Stats,
  ClearRefinements,
  RefinementList,
  Configure,
  Pagination,
} from "react-instantsearch";
import Hit from "../Hits/Hits";

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

function ListaMuebleAlgolia() {
  return (
    <div className="container">
      <InstantSearch searchClient={client} indexName="dev_ecommerce">
        <Configure hitsPerPage={6}></Configure>

        <SearchBox className="search-box w-80 mx-auto"/>

          <div className="results-container">
          <div className="box_izq text-left">
            <div className="sidebar">
              <ClearRefinements
                translations={{
                  reset: "Clear all",
                }}
                clearsQuery
                 ></ClearRefinements>
            </div>
            <div className="category">
              <h3>Merchant</h3>
              <RefinementList
                attribute="merchant"
                transformItems={(items) => {
                  return items.map((item) => {
                    return {
                      ...item,
                      merchant: `${item.merchant} (${item.count})`,
                    };
                  });
                }}
              ></RefinementList>
              <h3>Price</h3>
              <RefinementList
                attribute="price"
                transformItems={(items) => {
                  return items.map((item) => {
                    return {
                      ...item,
                      price: `${item.price} (${item.count})`,
                    };
                  });
                }}
              ></RefinementList>

            </div>
          </div>

          <div className="products-container">
            <Stats
              translations={{
                stats(nbHits, timeSpebtMS) {
                  return nbHits > 0 ? `Product(${nbHits}) ` : `No results`;
                },
              }} className="text-left pb-0.5 text-gray-500"
            ></Stats>
            <div className="ais-Hits-container">
            <Hits hitComponent={Hit}></Hits>
            </div>
          </div>
        </div>

        <Pagination className="toolbar" totalPages={10}>
          {" "}
        </Pagination>
      </InstantSearch>
    </div>
  );
}

export default ListaMuebleAlgolia;
