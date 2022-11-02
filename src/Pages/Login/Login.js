import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const {signUp} = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email= form.email.value;
        const password= form.password.value;
        console.log(email,password)
        event.target.reset();

        signUp(email,password)
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
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                    </form>
                    <p className='text-center text-lg'>Have an account?  <Link to={'/SignUp'}className='text-orange-600' >Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;