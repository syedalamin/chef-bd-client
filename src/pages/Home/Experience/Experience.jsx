import React from 'react';

const Experience = () => {
    return (
        <div className='flex items-center'>
            <div className='w-10/12 mx-auto my-10'>
                <div className='grid sm:grid-cols-2'>
                    <div className='flex items-center my-10 text-center sm:text-start sm:my-0'>
                        <div>
                            <h2 className='text-4xl font-bold py-3'>Experience </h2>
                            <p className='font-semibold text-black'>At your home, place of business, or private catering event, Chef Alanzo creates and serves exquisite dinners to groups of two to 200. Given that all meals, no matter how big or little, are memorable occasions with family and friends, his French-Mediterranean fusion cuisine relies on a lifetime of experience and expertise.</p>
                        </div>
                    </div>
                    <div className='flex items-center w-8/12 mx-auto'>
                        <div>
                            <img className='rounded' src="https://images.unsplash.com/photo-1556940211-ea1d97e04458?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;