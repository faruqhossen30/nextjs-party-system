import { useRouter } from "next/router";
import { use, useContext, useRef, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
import axios from "../lib/axios";

const register = () => {
    const { dispatch, user } = useContext(AuthContext)
    const router = useRouter();


    const name = useRef()
    const email = useRef()
    const mobile = useRef()
    const password = useRef()
    const password_confirmation = useRef()

    const [erors, setErrors] = useState('')

    const registerSubmit = (event) => {
        event.preventDefault();

        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/register`, {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            password_confirmation: password_confirmation.current.value,
        })
            .then((res) => {
                setErrors('')
                console.log(res);
                localStorage.setItem('token', res.data.token);
                window.location.assign(window.location.origin);
                // window.location.assign(window.location.origin);
            })
            .catch((err) => {
                setErrors(err.response.data.message)
                console.log('this is error', err);
            })

    }


    return (
        <div className="flex min-h-full items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img className="mx-auto h-12 w-auto" src="/logo.jpg" alt="Your Company" />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Login Now !</a>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={registerSubmit} >
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div className="py-2">
                            <input name="name" ref={name} type="name" autoComplete="name" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Full Name" />
                        </div>
                        <div className="py-2">
                            <input name="email" ref={email} type="email" autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div className="py-2">
                            <input name="mobile" ref={mobile} type="mobile" autoComplete="mobile" className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Mobile Number ( Optional )" />
                        </div>
                        <div className="py-2">
                            <input id="password" ref={password} name="password" type="password" autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
                        </div>
                        <div className="py-2">
                            <input id="password" name="password_confirmation" ref={password_confirmation} type="password" autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Confirm Password" />
                        </div>
                        <div>
                            {erors && <p className=" font-semibold text-red-600 text-sm">{erors}</p>}
                        </div>
                    </div>


                    <div>
                        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Sign UP
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default register
