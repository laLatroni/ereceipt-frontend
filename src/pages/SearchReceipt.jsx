import { useEffect, useState } from "react"
import axios from "axios"
import CAZALogo from "../components/CAZALogo";
import { BiEdit,BiTrash } from 'react-icons/bi';
import DateFormat from "../components/DateFormat";
import NumberFormat from "../components/NumberFormat";

const SearchReceipt = () => {

    const [id,setId] = useState("");

    const [receipts,setReceipts] = useState([
        {id: 1, names: 'Paul Andres',cus_email: 'polopdoandres@gmail.com',customer_no: 123456, dates: '2023-06-15',amount: 1234},
        {id: 2, names: 'John Lester Ymata',cus_email: 'johnlesterymata@gmail.com',customer_no: 123456, dates: '2023-03-20',amount: 1234}
    ]);

    const tableHeaders = ["ID","Name","Email","Customer No.","Dates","Amount","Action"];
    
    useEffect(() => {
        const getReceiptLists = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/v1/api/departments`)
                setReceipts(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getReceiptLists();
    },[])

    const editReceipt = (id) => {
        console.log(id);
    }

    const deleteReceipt = async (id) => {
        try {
            const data = await axios.delete(`http://localhost:8080/api/v1/api.departments/${id}`);
            alert(`Delete successful for id ${id}`);
            location.reload();
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="flex flex-col items-center py-5 h-screen">
            <CAZALogo />
            <form className="flex items-center p-2 w-3/4 gap-2 mt-5">
                <input className="p-2 border border-gray-300 w-1/2 rounded-md outline-none" type="search" onChange={(e) => setId(e.target.value)} placeholder="Search OR number" />
                <button className="bg-blue-500 text-white rounded-md p-2">Search</button>
            </form>

            <table className="w-3/4 mt-5">
                <tbody>
                    <tr className="bg-blue-500 text-white">
                        { tableHeaders.map(tableHeader => (
                            <th className="p-2">{tableHeader}</th>
                        )) }
                    </tr>
                    { receipts?.map(receipt => (
                        <tr key={receipt.id} className="even:bg-gray-200">
                            <td className="p-2">{receipt.id}</td>
                            <td className="p-2">{receipt.names}</td>
                            <td className="p-2">{receipt.cus_email}</td>
                            <td className="p-2">{receipt.customer_no}</td>
                            <td className="p-2"><DateFormat date={receipt.dates} /></td>
                            <td className="p-2"><NumberFormat amount={receipt.amount} /></td>
                            <td className="flex items-center justify-center gap-3 p-3">
                                <button onClick={() => editReceipt(receipt.id)} className="text-green-500 text-xl"><BiEdit /></button>
                                <button onClick={() => deleteReceipt(receipt.id)} className="text-red-500 text-xl"><BiTrash /></button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default SearchReceipt