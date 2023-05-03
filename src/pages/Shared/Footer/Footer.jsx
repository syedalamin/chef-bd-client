import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-black text-white pt-14 '>
            <div className='w-10/12 mx-auto'>
                <div className='grid grid-cols-3 pb-5'>
                    <div>
                        <h4 className='text-2xl font-bold pb-2'>Subscribe</h4>
                        <p>Give yourself the confidence <br /> to cook for a lifetime.</p>
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold pb-2'> Explore</h4>
                        <p>Browse Recipes</p>
                        <p>Submit a Recipe</p>
                        <p>Our Chefs</p>
                        <p>Latest News</p>
                        <p>Contact</p>
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold pb-2'>Contact</h4>
                        <p>Birpushia, Tangail Sadar Tangail</p>
                        <p>syedalamin2580@gmail.com</p>
                        <p>01782735246</p>
                    </div>
                </div>
                <p className='text-center py-2'><small>Copyright of my Chef BD</small></p>
            </div>
        </div>
    );
};

export default Footer;