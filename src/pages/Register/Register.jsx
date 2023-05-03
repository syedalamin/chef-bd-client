import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { createUser, signInGoogle, signInGithub } = useContext(AuthContext);
    const [accepeted, setAccepeted] = useState(false);


    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');




    const handleRegister = event => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('please add 6 up desite');
            return;
        }

        createUser(email, password)
            .then(result => {
                const creatededUser = result.user;
                console.log(creatededUser);
                setSuccess('user has created success');

            })
            .catch(error =>{
                setError(error.message)
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
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleGithub = () => {
        signInGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className='flex justify-center items-center my-10 '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center ">
                    <h2 className='text-xl text-center font-bold'>Please Register</h2>
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
                        <div>
                            <input type="submit" disabled={!accepeted} className='btn btn-sm bg-teal-700 my-2' value="Register" />
                        </div>
                        <div>
                            <p className='text-center font-semibold'><small>or login using</small></p>
                            <p className='text-red-600 text-center font-bold'>{error}</p>
                            <p className='text-green-600 text-center font-bold'>{success}</p>
                        </div>
                        <div className='flex justify-center  py-4'>
                            <button onClick={handleGoogle} className='mx-2' > <img style={{ width: '37px' }} src="https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png" alt="" /></button>
                            <button onClick={handleGithub} className='mx-2'><img style={{ width: '28px' }} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></button>
                        </div>
                        <p><small>Already Have an Account? <Link to='/login' className='btn-link'>Login</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;