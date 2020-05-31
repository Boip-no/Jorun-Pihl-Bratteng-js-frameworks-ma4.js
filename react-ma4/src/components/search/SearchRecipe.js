// This component will receive a filtering function as a prop. Include the component in the RecipeList component above the list.

import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Search({ handleSearch }) {
    return (
        <InputGroup className="search">
            <FormControl
                placeholder="Search by name..." onChange={event => handleSearch(event)}/>
        </InputGroup>
    );
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
};

export default Search;