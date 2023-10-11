import { useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const Update = ({ record,setOpenUpdate }) => {

    const [or_number,setOrNumber] = useState('');
    const [names,setNames] = useState(record.names);
    const [cus_email,setcusEmail] = useState(record.cus_email);
    const [dates,setDates] = useState(record.dates);
    const [rep_acc,setRep] = useState('');
    const [amount,setAmount] = useState(record.amount);
    const [customer_no,setCustomerNo] = useState(record.customer_no);

    // /api/v1/eor/transactions/{id}
    
    return (
        <div className="absolute top-0 left-0 h-full bg-black w-full bg-opacity-50 flex items-center justify-center">
            <form className="rounded-md p-2 bg-gray-100">
                <div className="flex items-center justify-between">
                    <h1 className="text-lg font-semibold">Update Record</h1>
                    <button onClick={() => setOpenUpdate(false)} className="text-red-500 text-xl cursor-pointer"><AiOutlineCloseSquare /></button>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <div className="flex flex-col">
                        <label htmlFor="name">Name:</label>
                        <input className="p-2 rounded-md outline-none border border-gray-300" type="text" value={names} onChange={(e) => setNames(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name">Email:</label>
                        <input className="p-2 rounded-md outline-none border border-gray-300" type="text" value={cus_email} onChange={(e) => setcusEmail(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name">Date:</label>
                    <input className="p-2 rounded-md outline-none border border-gray-300" type="date" value={dates} onChange={(e) => setDates(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name">Amount:</label>
                    <input className="p-2 rounded-md outline-none border border-gray-300" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>

                <button className="bg-blue-500 text-gray-100 p-2 rounded-md mt-2">Update</button>
            </form>
        </div>
    )
}

export default Update;