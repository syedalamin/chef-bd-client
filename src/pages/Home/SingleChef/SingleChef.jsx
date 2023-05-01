import React from 'react';

const SingleChef = ({ chef }) => {
    const {image_url, id, name } = chef;

    return (
        <div>
            <div className="card w-96 mx-auto bg-base-100 gap-4 shadow-xl">
                <figure><img style={{height: '300px'}} src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;