// This component will display the name and image of the recipe.

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function RecipeItem({ name, ingredients }) {
    return ( 
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                    <Link to={"resipe/" + ingredients}></Link>
            </Card.Body> 
        </Card>
    );
}

RecipeItem.propTypes = {
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired
};

export default RecipeItem;