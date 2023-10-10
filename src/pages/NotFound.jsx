import CAZALogo from "../components/CAZALogo";
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className="h-screen bg-gray-100 flex items-center justify-center">
            <div className="flex flex-col items-center">
                <CAZALogo />
                <h1 className="text-4xl font-semibold text-blue-500 mt-5">Oopss... page not found</h1>
                <button onClick={() => navigate(-1)} className="p-2 mt-2 bg-blue-500 text-gray-100 rounded-md self-start">Go back</button>
            </div>
        </div>
    )
}

export default NotFound;