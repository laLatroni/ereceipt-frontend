import { useState } from "react"
import axios from "axios"
import Update from "../components/Update";
import Delete from '../components/Delete';
import { useNavigate } from 'react-router-dom';
import { useFetchHook } from "../hooks/useFetchHook";
import Table from "../components/Table";

const SearchReceipt = () => {

    const [data,setData] = useState({});
    const [openUpdate,setOpenUpdate] = useState(false);
    const [openDelete,setOpenDelete] = useState(false);

    const navigate = useNavigate();

    // const { records: receipts, isLoading } = useFetchHook(`http://192.168.50.48:8080/api/v1/eor/transactions`);

    const records = [
        { id: 1, names: 'Paul Andres', cus_email: 'polopdoandres@gmail.com',customer_no: 123456, dates: '2023-10-02', amount: 50200 },
        { id: 2, names: 'John Lester Ymata', cus_email: 'polopdoandres@gmail.com',customer_no: 123456, dates: '2023-10-02', amount: 50200 },
        { id: 3, names: 'Genrev Condino', cus_email: 'polopdoandres@gmail.com',customer_no: 1234563, dates: '2023-10-02', amount: 50200 },
        { id: 4, names: 'Janelle Iglesias', cus_email: 'polopdoandres@gmail.com',customer_no: 123456, dates: '2023-10-02', amount: 50200 },
        { id: 5, names: 'John Carlo Bitay', cus_email: 'polopdoandres@gmail.com',customer_no: 123456, dates: '2023-10-02', amount: 50200 },
        { id: 6, names: 'Romeo Bayuga', cus_email: 'polopdoandres@gmail.com',customer_no: 123456, dates: '2023-10-02', amount: 50200 },
        { id: 7, names: 'Zeus Dela Cruz', cus_email: 'polopdoandres@gmail.com',customer_no: 123456, dates: '2023-10-02', amount: 50200 },
        { id: 8, names: 'Jace Caluya', cus_email: 'polopdoandres@gmail.com',customer_no: 123456, dates: '2023-10-02', amount: 50200 },
        { id: 9, names: 'Ian Escasinas', cus_email: 'polopdoandres@gmail.com',customer_no: 123456, dates: '2023-10-02', amount: 50200 },
        { id: 10, names: 'Jemphol Tan', cus_email: 'polopdoandres@gmail.com',customer_no: 123456, dates: '2023-10-02', amount: 50200 },
        { id: 11, names: 'Menelyn Daulo', cus_email: 'polopdoandres@gmail.com',customer_no: 123456, dates: '2023-10-02', amount: 50200 },
        { id: 12, names: 'Chomarice Gayo', cus_email: 'polopdoandres@gmail.com',customer_no: 123456, dates: '2023-10-02', amount: 50200 },
        { id: 13, names: 'John Dizon', cus_email: 'polopdoandres@gmails.com',customer_no: 123456, dates: '2023-10-03', amount: 50201 }
    ]

    // For searching function
    const [filtered,setFiltered] = useState(records);
    const searchTransaction = (userInput) => {
        const filteredData = receipts?.filter(receipt => {
            if(userInput === '') {
                return receipt
            } else {
                return receipt.names.toLowerCase().includes(userInput) || receipt.id == userInput || receipt.customer_no === userInput || receipt.cus_email.toLowerCase().includes(userInput) ||
                receipt.amount == userInput || receipt.dates.includes(userInput);
            }
        });
        setFiltered(filteredData);
    }

    return (
        <div className="flex flex-col items-center py-5 h-screen relative">
            {/* <CAZALogo /> */}
            <form className="flex items-center p-2 w-3/4 gap-2 mt-5">
                <input className="p-2 border border-gray-300 w-1/2 rounded-md outline-none" type="search" onChange={(e) => searchTransaction(e.target.value)} placeholder="Type to search" />
            </form>
            { filtered.length < 1 && <h1 className="w-3/4 mt-4 animate-pulse font-semibold -mb-5">No records yet for transactions</h1> }
            {/* { isLoading && <p className="font-semibold text-xl animate-pulse">No records yet...</p> } */}
            <Table records={filtered} setOpenUpdate={setOpenUpdate} setOpenDelete={setOpenDelete} setData={setData} />
            { openUpdate && <Update record={data} setOpenUpdate={setOpenUpdate} /> }
            { openDelete && <Delete setOpenDelete={setOpenDelete} record={data} /> }
        </div>
    )
}

export default SearchReceipt