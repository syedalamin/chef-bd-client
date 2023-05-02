import React from 'react';
import {useLoaderData, useParams} from 'react-router-dom';
const Chef = () => {
    const chefDetails = useLoaderData();
    console.log(chefDetails)
    return (
        <div>
            <h1>This is shef</h1>
        </div>
    );
};

export default Chef;