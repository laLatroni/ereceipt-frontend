import { AiOutlineLogout } from 'react-icons/ai';

const Nav = () => {

    return (
        <nav className="w-full p-4 bg-gray-800 text-gray-100 flex items-center justify-between">
            <h1>CAZA E-receipt</h1>

            <div>
                <button className="text-xl cursor-pointer"><AiOutlineLogout /></button>
            </div>
        </nav>
    )
}

export default Nav;