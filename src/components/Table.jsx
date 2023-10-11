import DateFormat from "./DateFormat";
import NumberFormat from "./NumberFormat";
import { BiEdit,BiTrash } from 'react-icons/bi';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Table = ({ records,setOpenUpdate,setOpenDelete,setData }) => {

    const tableHeaders = ["ID","Name","Email","Customer No.","Dates","Amount","Action"];

    const navigate = useNavigate();

    const editReceipt = (receipt) => {
        setData(receipt);
        setOpenUpdate(true);
    }

    const deleteReceipt = async (id) => {
        setOpenDelete(true);
        setData(id);
        // try {
        //     const data = await axios.delete(`http://192.168.50.48:8080/api/v1/eor/transactions/${id}`);
        //     alert(`Delete successful for id ${id}`);
        //     location.reload();
        // } catch(err) {
        //     console.log(err);
        // }
    }

    return (
        <table className="w-3/4 mt-5">
            <tbody>
                <tr className="bg-blue-500 text-white">
                    { tableHeaders.map((tableHeader,idx) => (
                        <th key={idx} className="p-2">{tableHeader}</th>
                    )) }
                </tr>
                { records?.slice(0,5).map((receipt,idx) => (
                    <tr key={idx} className="even:bg-gray-200">
                        <td className="p-2">{receipt.id}</td>
                        <td className="p-2">{receipt.names}</td>
                        <td className="p-2">{receipt.cus_email}</td>
                        <td className="p-2">{receipt.customer_no}</td>
                        <td className="p-2"><DateFormat date={receipt.dates} /></td>
                        <td className="p-2"><NumberFormat amount={receipt.amount} /></td>
                        <td className="flex items-center justify-center gap-3 p-3">
                            <button onClick={() => editReceipt(receipt)} className="text-green-500 text-xl"><BiEdit /></button>
                            <button onClick={() => deleteReceipt(receipt)} className="text-red-500 text-xl"><BiTrash /></button>
                            <button onClick={() => navigate(`/generatepdf/${receipt.id}`)} className="text-xl text-red-500"><AiOutlineFilePdf /></button>
                        </td>
                    </tr>
                )) }
            </tbody>
        </table>
    )
}

export default Table;