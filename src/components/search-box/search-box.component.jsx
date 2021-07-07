import React from "react";

import "./search-box.styles.css";
import { CardList } from "../card-list/card-list.component";

const SearCHbox = ({ placeholder, handleChange }) => (
  <>
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />

    <CardList monsters={filteredMonsters} />
  </>
);
