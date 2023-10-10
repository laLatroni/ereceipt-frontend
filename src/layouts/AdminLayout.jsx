import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Nav from '../components/Nav';

const AdminLayout = () => {
    return (
        <div className="grid grid-cols-5">
            <Sidebar />
            <div className="col-span-4">
                <Nav />
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout;