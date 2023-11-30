import { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import CAZALogo from '../components/CAZALogo';
import { baseUrl } from '../baseUrl';

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    const userLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post(`http://localhost:8080/login`,{ userName: email, password },{ withCredentials:true });
            console.log(data);
            alert('Logged in successful');
            navigate('/');
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className=" h-screen flex justify-center items-center bg-gray-200">
            <div className="grid grid-cols-2 w-3/4 px-10 py-5 h-3/4">
                <div className="bg-white p-10 flex flex-col justify-center">
                    <CAZALogo />
                    {/* <h1 className="text-center text-2xl font-semibold">Login</h1> */}

                    <form onSubmit={userLogin} className="flex flex-col gap-2">
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input className="p-2 rounded-md bg-gray-100 outline-none" type="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input className="p-2 rounded-md bg-gray-100 outline-none" type="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="bg-blue-500 text-gray-100 p-2 rounded-md w-full">Login</button>
                        <p className="text-blue-500 underline text-xs">Forget password?</p>
                    </form>
                </div>
                <div className="p-10 bg-blue-500 flex flex-col justify-center">
                    <h2 className="text-xl text-white">Welcome!</h2>
                    <p className="text-white text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni provident necessitatibus minus fuga, accusamus ex qui consequatur unde, sed officia perferendis ut consectetur repudiandae molestias. Esse expedita asperiores repellendus voluptates?</p>
                    <Link className="bg-transparent text-white text-sm p-2 border-gray-100 border rounded-md w-fit mt-2" to='/signup'>No account yet? Signup</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;