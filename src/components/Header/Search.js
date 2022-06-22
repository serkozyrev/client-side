import React, { useContext, useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import AuthContext from "../context/auth-context";

const Search = (props) => {
  const authCtx = useContext(AuthContext);
  const [providedSearch, setProvidedSearch] = useState("");

  const searchHandler = (event) => {
    setProvidedSearch(event.target.value);
  };
  const dateHandler = (providedSearch) => {
    authCtx.setDateSearch(providedSearch);
  };
  const locationHandler = (providedSearch) => {
    authCtx.setLocationSearch(providedSearch);
  };

  if (props.date) {
    dateHandler(providedSearch);
  }
  if (props.location) {
    locationHandler(providedSearch);
  }

  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder={`${props.date ? "Date" : "Location"} Description`}
        className="col-sm-2"
        aria-label="Search"
        value={providedSearch}
        onChange={searchHandler}
      />
    </Form>
  );
};

export default Search;
