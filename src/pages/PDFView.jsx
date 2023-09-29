import { useParams } from 'react-router-dom';
import { useFetchHook } from '../hooks/useFetchHook';
import DateFormat from '../components/DateFormat';
import NumberFormat from '../components/NumberFormat';
import CAZALogo from '../components/CAZALogo';

const PDFView = () => {

    const { id } = useParams();

    const { records,isLoading } = useFetchHook(`http://localhost:8080/api/v1/api/departments/${id}`);

    const generatePdf = async () => {
        try {
            const data = await axios.get(`http://localhost:8080/api/v1/generate/${id}`);
            console.log(data);
        } catch(err) {
            console.log(err);
        }
    } 

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <form className="bg-white rounded-md p-2 w-1/2 flex flex-col" onSubmit={generatePdf}>
                <CAZALogo />
                <h1 className="text-3xl font-bold text-blue-500 text-center tracking-widest mt-5">OFFICIAL RECEIPT</h1>
                <div>
                    <div className="p-2 font-semibold text-xl">
                        <h2>CAZA - Cavite</h2>
                        <h2>CAZA - Dela Rosa</h2>
                        <h2>NON - VAT REG. TIN</h2>
                        <h2>OR#: 1001-1000</h2>
                    </div>
                    <div className="border-t-2 border-dashed border-gray-800 p-2">
                        <p>Received from: jlpogi</p>
                        <p>Date: <DateFormat date='2023-06-15' /></p>
                        <p>Receive amount: <NumberFormat amount={1234} /></p>
                        <p>Mode of payment: Debit to Account</p>
                    </div>
                </div>
                <button className="bg-blue-500 w-fit p-2 rounded-md text-gray-100 self-center">Generate E-receipt</button>
            </form>
        </div>
    )
}

export default PDFView;