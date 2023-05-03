import React from 'react';

const Blog = () => {
    return (
        <div className='w-10/12 mx-auto my-20'>
            <div className='py-5'>
                <h2 className='text-2xl font-bold'>Tell us the differences between uncontrolled and controlled components</h2>
                <p>Controlled components in React are those whose state and behavior are managed by the parent component. To modify their state and behavior, these components rely on props that are given down from the parent component. Components that control their own state on an internal level are referred to as uncontrolled components.</p>
            </div>
            <div className='py-5'>
                <h2 className='text-2xl font-bold'>How to validate React props using PropTypes</h2>
                <p>PropTypes validators for React
                    PropTypes.any: Any data type may be used for the prop.
                    The prop must be a Boolean according to PropTypes.bool.
                    The prop must be a number, according to PropTypes.number.
                    The prop must be a string, according to PropTypes.string.
                    The prop must be a function, according to PropTypes.func.
                    The prop must be an array, according to PropTypes.array.
                </p>
            </div>
            <div className='py-5'>
                <h2 className='text-2xl font-bold'>Tell us the difference between nodejs and express js.</h2>
                <p>an extensive collection of functionality for both online and mobile applications is offered by the js web application framework. In other words, Express is a framework that sits on top of NodeJS and assists us in handling requests and responses, whereas NodeJS is the package that offers the JavaScript run-time environment.
                </p>
            </div>
            <div className='py-5'>
                <h2 className='text-2xl font-bold'>What is a custom hook, and why will you create a custom hook?</h2>
                <p>Reusability is provided by custom React JS hooks because once a custom hook is built, it can be used repeatedly, making the code cleaner and taking less time to write. Additionally, it speeds up code rendering because a custom hook doesn't have to be rendered repeatedly while the entire code is being rendered.
                </p>
            </div>
        </div>
    );
};

export default Blog;