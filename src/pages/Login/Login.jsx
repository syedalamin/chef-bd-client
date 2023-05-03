import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {

    const { signIn, signInGoogle, signInGithub } = useContext(AuthContext);
    const [accepeted, setAccepeted] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })

    }
    const handleAccepted = event => {
        setAccepeted(event.target.checked);
    }

    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleGithub = () => {
        signInGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <h2 className='text-xl text-center'>Please login</h2>
                <div className="card-body items-center ">
                    <form onSubmit={handleLogin} >
                        <div>
                            <label >Email</label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered input-success w-full max-w-xs my-2" required />
                        </div>
                        <div>
                            <label >Password</label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered input-success w-full max-w-xs my-2" required />
                        </div>
                        <div className='flex'>
                            <input onClick={handleAccepted} type="checkbox" name="chek" />
                            <p className='ps-2'>I agree terms and conditions </p>
                        </div>
                        <div>
                            <input type="submit" disabled={!accepeted} className='btn btn-sm bg-teal-700 my-2' value="Login" />
                        </div>
                    </form>
                    <p className='text-center font-semibold'><small>or login using</small></p>
                    <div className='flex justify-center  py-4'>
                        <button onClick={handleGoogle} className='mx-2' > <img style={{ width: '37px' }} src="https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png" alt="" /></button>
                        <button onClick={handleGithub} className='mx-2'><img style={{ width: '28px' }} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></button>
                    </div>
                    <p><small>Don't Have an Account? <Link to='/register' className='btn-link'>Register</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;