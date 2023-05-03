import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleRecipe from '../SingleRecipe/SingleRecipe';
const Chef = () => {
    const recipeDetails = useLoaderData();

    return (
        <div className='grid  sm:grid-cols-2 w-10/12 mx-auto gap-4 mt-10'>
            {
                recipeDetails.map( recipe => <SingleRecipe
                    key={recipe.id}
                    recipe={recipe}
                ></SingleRecipe>)
            }
        </div>
    );
};

export default Chef;