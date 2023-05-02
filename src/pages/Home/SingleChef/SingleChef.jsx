import React from 'react';
import { Link } from 'react-router-dom';
const SingleChef = ({ chef }) => {
    const { id, image_url, name, years_experience, num_recipes, likes, } = chef;

    return (
        <div>
            <div className="card mx-auto bg-base-100 gap-2 shadow-xl">
                <figure><img style={{ height: '200px', width: '100%' }} src={image_url} alt="Shoes" /></figure>
                <div className="card-body py-0">
                    <h2 className="card-title justify-center">{name}</h2>
                    <div className='flex'>
                        <p>Yearsws: {years_experience}</p>
                        <p>Recipes: {num_recipes}</p>
                    </div>
                    <div className='flex justify-end py-4'>
                        <p>Like: {likes}</p>
                        <p className='text-red-600 btn-link font-semibold'>
                            <Link to={`/chef/${id}`}>View Recipes</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;