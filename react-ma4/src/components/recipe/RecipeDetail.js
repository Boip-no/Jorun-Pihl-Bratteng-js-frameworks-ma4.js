import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

function RecipeDetail() {
    const [loading, setLoading] = useState(true);

    let { id } = useParams();
    const url = BASE_URL + id;

    useEffect(() => {
    fetch(url) 
        .then(response => response.json())
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spinner animation="border" className="Spinner" />
    }
}

export default RecipeDetail;