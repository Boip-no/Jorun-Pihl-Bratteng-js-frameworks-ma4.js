import React from 'react';
import Heading from "../layout/Heading";
import RecipeList from "../recipe/RecipeList";

export function Home() {
    return (
        <>
            <Heading title="Rick and Morty" />
            <RecipeList />
        </>
    );
}

export default Home;

