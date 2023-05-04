import React from 'react';

const ChefBanner = ({ chef }) => {
    console.log(chef);
    const { id, image_url, name, years_experience, num_recipes, likes, bio } = chef;
    return (
        <div>
            <div className=" grid gap-4 md:grid-cols-3 bg-base-100 shadow-xl border rounded-md">
                <div>
                    <figure><img className='rounded-md' style={{ height: '250px', width: '100%' }} src={image_url} alt="Movie" /></figure>
                </div>
                <div className="md:col-span-2  p-4 flex items-center">
                    <div>
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className='py-2 font-semibold text-sm'>{bio}</p>
                        <p className='text-lg font-semibold'>Experience: {years_experience}</p>
                        <p className='text-lg font-semibold py-2'>Recipes: {num_recipes}</p>
                        <p className='text-lg font-semibold'>Likes: {likes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefBanner;