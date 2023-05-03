import React from 'react';

const Introduction = () => {
    return (
        <div className='mt-20 w-10/12 mx-auto '>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='flex items-center'>
                    <div className="grid mx-auto   sm:grid-cols-10   gap-2">
                        <div className="sm:row-span-6 sm:col-span-6">
                            <img style={{ height: '100%', width: '100%' }} className='rounded-md' src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />
                        </div>
                        <div className="sm:row-span-3 sm:col-span-4">
                            <img style={{ height: '100%', width: '100%' }} className='rounded-md' src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                        </div>
                        <div className=" sm:row-span-3 sm:col-span-4 ">
                            <img style={{ height: '100%', width: '100%' }} className='rounded-md' src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex items-center my-10 text-center sm:text-start sm:my-0'>
                    <div>
                        <p className='text-green-900 font-semibold text-xl'>Introduction to Chef Tutul BD</p>
                        <h2 className='text-4xl font-bold py-3'>Give yourself the confidence to cook for a lifetime.</h2>
                        <p className='font-semibold text-black'>There are several versions of Lorem Ipsum passages accessible, but the most have been changed in some way by the addition of humor and words that don't seem the least bit plausible. If you plan to utilize a passage, be sure the text is accurate.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;