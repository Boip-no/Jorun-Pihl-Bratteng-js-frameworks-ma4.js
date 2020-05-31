import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BASE_URL } from "../../constants/api";

function RecipeDetail() {
    const [detail, setDetail] = useState (null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();
    const url = BASE_URL + id;

    useEffect(() => {
    fetch(url) 
        .then(response => response.json())
        .then(json => setDetail(json))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spinner animation="border" className="Spinner" />
    }

    return (
        <Row>
            <Col md={6} className="detail-image">
            </Col>
            <Col>
                <h1>{detail.name}</h1>
                <p>
                    <b>Gender:</b> {detail.gender}
                </p>
                <p>
                    <b>Species:</b> {detail.species}
                </p>
                <p>
                    <b>Status:</b> {detail.status}
                </p>
            </Col>
        </Row>
    );
}

export default RecipeDetail;