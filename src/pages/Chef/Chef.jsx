import React, { useState, useEffect, useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleRecipe from '../SingleRecipe/SingleRecipe';
import { AuthContext } from '../../Provider/AuthProvider';
import ChefBanner from '../ChefBanner/ChefBanner';

const Chef = () => {
    const recipeDetails = useLoaderData();
    const { chefs } = useContext(AuthContext)
    const { id } = useParams();
    const chef = chefs?.find(n => n.id == id)
    
    return (
        <div className='w-10/12 mx-auto'>
            <div>
                <ChefBanner chef={chef}></ChefBanner>
            </div>
            <div className='grid  sm:grid-cols-2  gap-4 mt-10'>
                {
                    recipeDetails.map(recipe => <SingleRecipe
                        key={recipe.id}
                        recipe={recipe}
                    ></SingleRecipe>)
                }
            </div>
        </div>
    );
};

export default Chef;