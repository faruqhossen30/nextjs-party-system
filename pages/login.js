
import { useRouter } from "next/router";
import { use, useContext, useRef, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
import axios from "../lib/axios";

const Login = () => {
    const { dispatch, user } = useContext(AuthContext)
    const router = useRouter();
    console.log('uthContext user', user);
    // State
    const [error, setError] = useState();

    const email = useRef();
    const password = useRef();

    const loginSubmit = async (e) => {
        e.preventDefault();

        // dispatch({type:'LOGIN', payload:'abc'});
        // console.log('authContext user2=', user);
        const csrf = await axios.get('/sanctum/csrf-cookie');
        const formData = new FormData();
        formData.append('email', email.current.value)
        formData.append('password', password.current.value)
        console.log(formData);
        console.log(email.current.value);
        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/login`, formData)
            .then((res) => {
                console.log(res);
                localStorage.setItem('user', JSON.stringify(res.data.data));
                localStorage.setItem('token', res.data.token);
                window.location.assign(window.location.origin);
            })
            .catch((err) => {
                console.log('this is error', err);
                setError(err.response.data.message)
            })
    }
    if (!user) {
        return (
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img className="mx-auto h-12 w-auto" src="/logo.jpg" alt="Your Company" />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Register Now !</a>
                        </p>
                    </div>
                    <form onSubmit={loginSubmit} className="mt-8 space-y-6" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div className="py-2">
                                <label htmlFor="email-address" className="sr-only">Email </label>
                                <input id="email-address" name="email" ref={email} type="email" autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input id="password" name="password" ref={password} type="password" autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
                            </div>
                            <div>
                                {error && <p className=" font-semibold text-red-600 text-sm py-1">{error}</p>}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    } else {
        return window.location.assign(window.location.origin);

    }
}

export default Login