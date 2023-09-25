import { useEffect, useState } from "react"
import axios from "axios"
import CAZALogo from "../components/CAZALogo";
import { BiEdit,BiTrash } from 'react-icons/bi';

const SearchReceipt = () => {

    const [id,setId] = useState("");

    const [receipts,setReceipts] = useState([]);
    
    useEffect(() => {
        const searchId = async (e) => {
            e.preventDefault();
            
            try {
                const res = await axios.get(`http://localhost:8080/api/v1/api/departments`)
                setReceipts(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        searchId();
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
                        <th className="p-2">ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Customer No.</th>
                        <th className="p-2">Dates</th>
                        <th className="p-2">Amount</th>
                        <th className="p-2">Action</th>
                    </tr>
                    { receipts.filter(receipt => id === '' ? receipt : receipt.id === id)?.map(receipt => (
                        <tr key={receipt.id} className="even:bg-gray-200">
                            <td className="p-2">{receipt.id}</td>
                            <td className="p-2">{receipt.names}</td>
                            <td className="p-2">{receipt.cus_email}</td>
                            <td className="p-2">{receipt.customer_no}</td>
                            <td className="p-2">{receipt.dates}</td>
                            <td className="p-2">{receipt.amount}</td>
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