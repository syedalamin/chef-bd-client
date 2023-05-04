import React, { useState, useEffect, createContext, } from 'react';
import SingleChef from '../SingleChef/SingleChef';

const Chefs = () => {
    const [chef, setChef] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='text-center my-10'>
            <h4 className='text-4xl my-10 font-bold'>Our Chef</h4>
            <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 w-10/12 mx-auto'>
                {
                    chef.map(che =>
                        <SingleChef
                            key={che.id}
                            chef={che}
                        ></SingleChef>)
                }
            </div>
        </div>
    );
};

export default Chefs;