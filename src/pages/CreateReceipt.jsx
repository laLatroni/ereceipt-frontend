import { useState } from 'react';
import axios from 'axios';

const CreateReceipt = () => {
    const [id,setId] = useState('');
    const [or_number,setOrNumber] = useState('');
    const [names,setName] = useState('');
    const [cus_email,setcusEmail] = useState('');
    const [dates,setDates] = useState('');
    const [rep_acc,setRep] = useState('');
    const [amount,setAmount] = useState('');
    const [customer_no,setCustomerNo] = useState('');
    

    const onSubmit = async (e) => {
        e.preventDefault();

        const names = `${firstname} ${lastname}`;

        try {
            const data = await axios.post('http://localhost:8080/api/v1/api',{ id, or_number,names, cus_email, dates,rep_acc,amount,customer_no });
            console.log(data);
            alert('Transaction Complete');
        } catch(err) {
            console.log(err);
        }

    }

    return (
        <div className="h-screen flex flex-col items-center container m-auto py-10 px-5">
            <img className="w-52" src="/images/cazalogo.png" alt="CAZA Logo" />
            <h1 className="text-center font-medium md:text-2xl mt-5">Customer Transaction</h1>

            <div className="flex justify-center items-center w-full">
                <form className="w-1/2 flex flex-col gap-2" onSubmit={onSubmit}>
                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="password">ID:</label>
                        <input className="p-2 outline-none border border-gray-300 rounded-md" type="text" onChange={(e) => setId(e.target.value)} />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="First Name">OR Number:</label>
                        <input className="p-2 outline-none border border-gray-300 rounded-md" type="text" onChange={(e) => setOrNumber(e.target.value)} />
                    </div>
                 
                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="Last Name">Customer Name:</label>
                        <input className="p-2 outline-none border border-gray-300 rounded-md" type="text" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="password">Amount:</label>
                        <input className="p-2 outline-none border border-gray-300 rounded-md" type="text" onChange={(e) => setAmount(e.target.value)} />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="Email">Customer Email:</label>
                        <input className="p-2 outline-none border border-gray-300 rounded-md" type="text" onChange={(e) => setcusEmail(e.target.value)} />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="password">Date:</label>
                        <input className="p-2 outline-none border border-gray-300 rounded-md" type="text" onChange={(e) => setDates(e.target.value)} />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="password">Mode of Payment:</label>
                        <input className="p-2 outline-none border border-gray-300 rounded-md" type="text" onChange={(e) => setRep(e.target.value)} />
                    </div>
                
                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="password">Customer No.:</label>
                        <input className="p-2 outline-none border border-gray-300 rounded-md" type="text" onChange={(e) => setCustomerNo(e.target.value)} />
                    </div>

                    <button className="bg-blue-500 text-gray-100 rounded-md p-2 w-1/4 self-end">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateReceipt;