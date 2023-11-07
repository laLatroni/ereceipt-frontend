import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CAZALogo from '../components/CAZALogo';
import { useCookies } from 'react-cookie';

const Signup = () => {
    
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [cookie, setCookie, removeCookie] = useCookies(['token']);

    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post('http://localhost:8080/api/v1/eor/user-register',{ firstName,lastName,email,password });
            alert('Registered successfully');
            navigate('/login');
        } catch(err) {
            alert(err.response.data.error);
        }
    }
    
    return (
        <div className="bg-gray-200 h-screen flex justify-center items-center">
            <form className="bg-white p-5 w-1/2 rounded-md flex flex-col items-center" onSubmit={registerUser}>
                <CAZALogo />
                <h1 className="text-2xl font-medium self-start">Sign Up</h1>
                <p className="text-gray-400 text-sm self-start">Please fill in this form to create an account</p>

                <div className="mt-5 w-full">
                    <div className="flex items-center justify-around gap-2">
                        <input className="p-2 outline-none border w-full border-gray-300 rounded-md" placeholder="First Name" type="text" onChange={(e) => setFirstName(e.target.value)} required />
                        <input className="p-2 outline-none border w-full border-gray-300 rounded-md" placeholder="Last Name" type="text" onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                    <div className="mt-3">
                        <input className="p-2 outline-none border w-full border-gray-300 rounded-md" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mt-3 flex flex-col gap-3">
                        <input className="p-2 outline-none border w-full border-gray-300 rounded-md" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        {/* <input className="p-2 outline-none border w-full border-gray-300 rounded-md" type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} /> */}
                    </div>
                </div>
                <button className="p-2 rounded-md bg-blue-500 text-white mt-2 w-1/4">Signup</button>
            </form>
        </div>
    )
}

export default Signup;