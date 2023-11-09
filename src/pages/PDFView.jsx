import { useParams } from 'react-router-dom';
import { useFetchHook } from '../hooks/useFetchHook';
import DateFormat from '../components/DateFormat';
import NumberFormat from '../components/NumberFormat';
import CAZALogo from '../components/CAZALogo';
import axios from 'axios';

const PDFView = () => {

    const { id } = useParams();

    const { records,isLoading } = useFetchHook(`${baseUrl()}/transactions/${id}`);

    const generatePdf = async () => {
        
        try {
            const data = await axios.get(`${baseUrl()}/transactions/generatepdf/${id}`);
            console.log(data);
            alert('receipt has been regenerated');
        } catch(err) {
            console.log(err);
        }
    } 

    const sendReceipt = async () => {
        try {
            const data = await axios.post(`${baseUrl()}/transactions/send-email`, { names: records.names, cus_email: records.cus_email, or_number: records.or_number,dates: records.dates, rep_acc: records.rep_acc, amount: records.amount });
            console.log(data);
            alert(`Email has been sent to ${records.cus_email}`)
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white rounded-md p-2 w-1/2 flex flex-col">
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
                        <p>Received from: {records?.names}</p>
                        <p>Date: <DateFormat date={records?.dates} /></p>
                        <p>Receive amount: <NumberFormat amount={records?.amount} /></p>
                        <p>Mode of payment: {records?.rep_acc}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 p-2">
                    <button onClick={generatePdf} className="bg-blue-500 w-fit p-2 rounded-md text-gray-100 self-center cursor-pointer">Generate E-receipt</button>
                    <button onClick={sendReceipt} className="bg-blue-500 w-fit p-2 rounded-md text-gray-100 self-center cursor-pointer">Send receipt</button>
                </div>
            </div>
        </div>
    )
}

export default PDFView;