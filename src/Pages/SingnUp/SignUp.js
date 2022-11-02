import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {
    const { createUser,providerLogin } = useContext(AuthContext)

    const handleSubmitSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        event.target.reset();

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }
 
      const  googleProvider = new GoogleAuthProvider()

    const handleGooglSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => console.error(error))
    }

    return (
        <div className="hero w-full ">
            <div className="hero-content  gap-10 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0  py-20 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmitSignUp} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />

                        </div>
                    </form>
                    <p className='text-center text-lg'>Already have an account?  <Link to={'/login'} className='text-orange-600'>Login</Link></p>
                    <div className="form-control mt-6">
                        
                        <button onClick={handleGooglSignIn} className="btn btn-black m-6 d-flex justify-evenly "><FaGoogle></FaGoogle> Google Login</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;