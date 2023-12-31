import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CAZALogo from '../components/CAZALogo';
import { useCookies } from 'react-cookie';

const Signup = () => {
    
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [cookie, setCookie, removeCookie] = useCookies(['token']);

    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post('http://localhost:8080/api/v1/auth/register',{ email,password });
            const token = 'Bearer ' + data.data.token;
            console.log(token);
            setCookie('Authorization',token);
            navigate('/login');
        } catch(err) {
            console.log(err);
        }
    }


    // /api/v1/register -> registration -> gagawa ng record sa user/customer table
    // /api/v1/login -> login -> mapupunta sa homepage 
    // /api/v1/forgetpassword -> forget password
    
    return (
        <div className="bg-gray-200 h-screen flex justify-center items-center">
            <form className="bg-white p-5 w-1/2 rounded-md flex flex-col items-center" onSubmit={registerUser}>
                <CAZALogo />
                <h1 className="text-2xl font-medium self-start">Sign Up</h1>
                <p className="text-gray-400 text-sm self-start">Please fill in this form to create an account</p>

                <div className="mt-5 w-full">
                    {/* <div className="flex items-center justify-around gap-2">
                        <input className="p-2 outline-none border w-full border-gray-300 rounded-md" placeholder="First Name" type="text" onChange={(e) => setFname(e.target.value)} />
                        <input className="p-2 outline-none border w-full border-gray-300 rounded-md" placeholder="Last Name" type="text" onChange={(e) => setLname(e.target.value)} />
                    </div> */}
                    <div className="mt-3">
                        <input className="p-2 outline-none border w-full border-gray-300 rounded-md" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mt-3 flex flex-col gap-3">
                        <input className="p-2 outline-none border w-full border-gray-300 rounded-md" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        {/* <input className="p-2 outline-none border w-full border-gray-300 rounded-md" type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} /> */}
                    </div>
                </div>
                <button className="p-2 rounded-md bg-blue-500 text-white mt-2 w-1/4">Signup</button>
            </form>
        </div>
    )
}

export default Signup;