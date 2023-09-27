import CAZALogo from "./CAZALogo";
import { Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import { IoCreateOutline } from 'react-icons/io5';
import { AiOutlineSearch } from 'react-icons/ai';

const Sidebar = () => {

    const menus = [
        { menu: 'Dashboard', icon: <AiOutlineHome />, link: '/' },
        { menu: 'Create Receipt', icon: <IoCreateOutline />, link: '/create-receipt' },
        { menu: 'Search Receipt', icon: <AiOutlineSearch />, link: '/search-receipt' }
    ];

    return (
        <nav className="bg-blue-500 h-full w-full col-span-1 flex flex-col items-center py-5">
            <CAZALogo />
            <ul className="flex mt-5 flex-col gap-2 w-full">
                { menus.map((menu,idx) => (
                    <Link to={`/${menu.link}`} className="p-2 text-xl font-semibold text-gray-100 flex items-center gap-1" key={idx}>
                        {menu.icon}
                        <li className="px-2">{menu.menu}</li>
                    </Link>
                )) }
            </ul>

        </nav>
    )
}

export default Sidebar;