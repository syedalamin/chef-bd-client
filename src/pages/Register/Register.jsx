import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);


    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
        .then(result =>{
            const creatededUser = result.user;
            console.log(creatededUser)
        })
        .catch(error => {
            console.log(error.message)
        })

    }
    return (
        <div className='flex justify-center items-center  '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <h2 className='text-xl text-center'>Please Register</h2>
                <div className="card-body items-center ">
                    <form onSubmit={handleRegister}>
                        <label >Name</label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-success w-full max-w-xs my-2" required/>
                        <label >Photo URL</label>
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered input-success w-full max-w-xs my-2" required />
                        <label >Email</label>
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered input-success w-full max-w-xs my-2" required />
                        <label >Password</label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered input-success w-full max-w-xs my-2" required />
                        <input type="submit" className='btn btn-sm bg-teal-700 my-2' value="Register" />
                    
                    <p><small>Already Have an Account? <Link to='/login' className='btn-link'>Login</Link></small></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;