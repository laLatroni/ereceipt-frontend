import { useParams } from 'react-router-dom';
import { useFetchHook } from '../hooks/useFetchHook';

const PDFView = () => {

    const { id } = useParams();

    const { records,isLoading } = useFetchHook(`http://localhost:8080/api/v1/api/departments/${id}`);

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <form className="bg-white rounded-md p-2 w-1/2">
                <h1 className="text-3xl font-bold text-blue-500 text-center tracking-widest">OFFICIAL RECEIPT</h1>

                <div>
                    <div className="p-2 font-semibold">
                        <h2>CAZA - Cavite</h2>
                        <h2>CAZA - Dela Rosa</h2>
                        <h2>NON - VAT REG. TIN</h2>
                        <h2>OR#: 1001-1000</h2>
                    </div>
                    <div className="">

                    </div>

                </div>
            </form>
        </div>
    )
}

export default PDFView;