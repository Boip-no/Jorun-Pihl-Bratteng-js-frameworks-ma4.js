import React from 'react';
import Heading from "../layout/Heading";
import RecipeList from "../recipe/RecipeList";

export function Home() {
    return (
        <>
            <Heading title="Recipe" />
            <RecipeList />
        </>
    );
}

export default Home;

