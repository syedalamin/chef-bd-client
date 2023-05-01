import React, { useState, useEffect } from 'react';
import SingleChef from '../SingleChef/SingleChef';
const Chefs = () => {
    const [chef, setChef] = useState([]);
    console.log(chef);
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='text-center'>
            <h4>All Shef {chef.length}</h4>
            <div className='grid grid-cols-3'>
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