// This component will connect to the API and display a list of recipe items using the RecipeItem component below.

// As always, inspect the return value of the API call to determine the appropriate properties to use as props for the RecipeItem component.

// This component will pass a function that filters the list on the relevant property into the SearchRecipe component.

import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecipeItem from "./RecipeItem";
import { BASE_URL } from "../../constants/api";

function RecipeList() {
    const [recipe, setRecipe] = useState([]);
    const [filteredRecipe, setFilteredRecipe] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setRecipe(json.results);
                setFilteredRecipe(json.results);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);
}

const filterCards = function(e) {
    const searchValue = e.target.value.toLowerCase();
    const filteredArray = Recipe.filter(function(char) {
        const lowerCaseName = char.name.toLowerCase();
        if (lowerCaseName.startsWith(searchValue)) {
            return true;
        }
        return false;
    });

    // Set filtered Recipe to the new array
    setFilteredRecipe(filteredArray);
};


if (loading) {
    return <Spinner animation="border" className="spinner" />;
}

return (
    <>
        <Search handleSearch={filterCards} />
        <Row>
            {filreredRecipe.map(recipe => {
                const { name, ingredients } = recipe;

                return (
                    <Col sm={6} md={3} key={name}>
                        <RecipeItem name={name} ingredients={ingredients} />
                    </Col>
                );
            })}
        </Row>
    </>
)
export default RecipeList;