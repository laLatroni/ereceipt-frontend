import { AiOutlineLogout } from 'react-icons/ai';
import axios from 'axios';
import { baseUrl } from '../baseUrl';

const Nav = () => {

    const logout = async () => {
        try {
            const data = await axios.get(`http://localhost:8080/api/v1/logout`);
            console.log(data);
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <nav className="w-full p-4 bg-gray-800 text-gray-100 flex items-center justify-between">
            <h1>CAZA E-receipt</h1>

            <div>
                <button onClick={logout} className="text-xl cursor-pointer"><AiOutlineLogout /></button>
            </div>
        </nav>
    )
}

export default Nav;