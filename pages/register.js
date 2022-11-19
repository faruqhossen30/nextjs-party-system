import { useRouter } from "next/router";
import { use, useContext, useRef, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
import axios from "../lib/axios";

const register = () => {
    const {dispatch,user}=useContext(AuthContext)
    const router=useRouter();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();


  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
        <div>
            <img className="mx-auto h-12 w-auto" src="/logo.jpg" alt="Your Company" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
                Or
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Login Now !</a>
            </p>
        </div>
        <form className="mt-8 space-y-6" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
                <div className="py-2">
                    <input  name="name"  type="name" autoComplete="name" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Full Name" />
                </div>
                <div className="py-2">
                    <input name="email"  type="email"  autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
                </div>
                <div className="py-2">
                    <input name="mobile"  type="mobile"   autoComplete="mobile" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Mobile Number ( optional )" />
                </div>
                <div className="py-2">
                    <input id="password" name="password"  type="password" autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
                </div>
                <div className="py-2">
                    <input id="password" name="re-password"  type="password" autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Confirm Password" />
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
