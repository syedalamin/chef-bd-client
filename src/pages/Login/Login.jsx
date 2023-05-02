import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const  form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error.message)
        })

    }
    

    return (
        <div className='flex justify-center items-center h-96'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <h2 className='text-xl text-center'>Please login</h2>
                <div className="card-body items-center ">
                    <form onSubmit={handleLogin} >
                        <label >Email</label>
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered input-success w-full max-w-xs my-2" required />
                        <label >Password</label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered input-success w-full max-w-xs my-2" required />
                        <input type="submit" className='btn btn-sm bg-teal-700 my-2' value="Login" />
                    <p><small>Don't Have an Account? <Link to='/register' className='btn-link'>Register</Link></small></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;