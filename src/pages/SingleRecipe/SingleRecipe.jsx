import React  from 'react';

const SingleRecipe = ({ recipe }) => {
    const {  recipe_url, recipe_name, ingredients, cooking_method, rating } = recipe;
    

    

    return (
        <>
            <div className="card  bg-base-100 shadow-xl border-2">
                <figure><img src={recipe_url} style={{ height: "300px", width: "100%" }} /></figure>
                <div className="card-body p-4">
                    <div className='flex '>
                        <h4 className='text-2xl font-bold flex-1'>{recipe_name}</h4>
                        <button>hi</button>
                    </div>
                    <div>
                        <p>{cooking_method}</p>
                        <p>{ingredients.map(n => <li>{n}</li>)}</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleRecipe;