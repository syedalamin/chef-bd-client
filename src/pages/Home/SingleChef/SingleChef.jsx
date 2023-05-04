import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
const SingleChef = ({ chef }) => {
    const { id, image_url, name, years_experience, num_recipes, likes, } = chef;

    return (
        <div>
            <div className="card mx-auto bg-base-100 gap-2 shadow-xl">
                <LazyLoad height={250} threshold={0.95}>
                    <figure><img style={{ height: '250px', width: '100%' }} src={image_url} alt="Shoes" /></figure>
                </LazyLoad>
                <div className="card-body py-0">
                    <h2 className="card-title justify-center">{name}</h2>
                    <div className='flex'>
                        <p>Years: {years_experience}</p>
                        <p>Recipes: {num_recipes}</p>
                    </div>
                    <div className='flex justify-between py-4 items-center'>
                        <div>
                            <p>Like: {likes}</p>
                        </div>
                        <div>
                            <button className='px-3 py-1 text-white font-semibold rounded-md bg-teal-700 hover:bg-teal-950'><Link to={`/chef/${id}`}>View Recipes</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;