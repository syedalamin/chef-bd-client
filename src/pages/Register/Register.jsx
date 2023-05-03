import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { createUser, signInGoogle, signInGithub } = useContext(AuthContext);
    const [accepeted, setAccepeted] = useState(false);
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result => {
                const creatededUser = result.user;
                console.log(creatededUser);
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
        <div className='flex justify-center items-center  '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <h2 className='text-xl text-center'>Please Register</h2>
                <div className="card-body items-center ">
                    <form onSubmit={handleRegister}>
                        <div>
                            <label >Name</label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-success w-full max-w-xs my-2" required />
                        </div>
                        <div>
                            <label >Photo URL</label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered input-success w-full max-w-xs my-2" required />
                        </div>
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
                        <p className='text-center font-semibold'><small>or login using</small></p>
                        <div className='flex justify-center  py-4'>
                            <button onClick={handleGoogle} className='mx-2' > <img style={{ width: '37px' }} src="https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png" alt="" /></button>
                            <button onClick={handleGithub} className='mx-2'><img style={{ width: '28px' }} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></button>
                        </div>

                        <div>
                            <input type="submit" disabled={!accepeted} className='btn btn-sm bg-teal-700 my-2' value="Register" />
                        </div>
                        <p><small>Already Have an Account? <Link to='/login' className='btn-link'>Login</Link></small></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;