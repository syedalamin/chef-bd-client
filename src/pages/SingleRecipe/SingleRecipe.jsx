import React from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar, FaBookmark } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleRecipe = ({ recipe }) => {
    const { recipe_url, recipe_name, ingredients, cooking_method, rating } = recipe;

    const handleClick = event => {
        event.currentTarget.disabled = true;
        
    };
    const notify = () => toast("favorite disable the button.");

    return (
        <>
            <div className="card  bg-base-100 shadow-xl border-2">
                <figure><img src={recipe_url} style={{ height: "300px", width: "100%" }} /></figure>
                <div className="card-body p-4">
                    <div className='flex '>
                        <h4 className='text-2xl font-bold flex-1'>{recipe_name}</h4>
                        <button className='btn btn-success' onClick={handleClick} ><FaBookmark onClick={notify}></FaBookmark></button>
                        <ToastContainer />
                    </div>
                    <div>
                        <p>{cooking_method}</p>
                        <p>{ingredients.map(n => <li>{n}</li>)}</p>
                    </div>
                    <div>
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className=' text-lg text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            readonly
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleRecipe;