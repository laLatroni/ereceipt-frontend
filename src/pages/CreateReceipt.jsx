import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateReceipt = () => {

    const modeOfPayments = [
        { id: 1, payment: 'G-cash' },
        { id: 2, payment: 'Bank Transfer' },
        { id: 3, payment: 'Maya' }
    ]

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1
    const day = new Date().getDate();
    const dateFormat = year + '-' + (month < 10 ? `0${month}` : month) + '-' + day;
   
    const [id,setId] = useState('');
    const [or_number,setOrNumber] = useState('');

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [middleName,setMiddleName] = useState('');
    const [names,setNames] = useState(`${firstName} ${middleName} ${lastName}`);

    const [cus_email,setcusEmail] = useState('');
    const [dates,setDates] = useState(dateFormat);
    const [rep_acc,setRep] = useState('');
    const [amount,setAmount] = useState('');
    const [customer_no,setCustomerNo] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await axios.post('http://192.168.50.48:8080/api/v1/eor/transactions',{ id, or_number,names, cus_email, dates,rep_acc,amount,customer_no });
            console.log(data);
            alert('Transaction Complete');
            navigate('/search-receipt');
        } catch(err) {
            console.log(err);
        }

    }

    return (
        <div className="h-screen flex flex-col items-center container m-auto py-10 px-5">
            <h1 className="text-center font-medium md:text-2xl mt-5">Customer Transaction</h1>

            <div className="flex justify-center items-center w-full">
                <form className="w-1/2 flex flex-col gap-2" onSubmit={onSubmit}>
                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="password">First Name:</label>
                        <input className="p-2 outline-none border border-gray-300 rounded-md" type="text" onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="First Name">Middle Name:</label>
                        <input className="p-2 outline-none border border-gray-300 rounded-md" type="text" onChange={(e) => setMiddleName(e.target.value)} />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="First Name">Last Name:</label>
                        <input className="p-2 outline-none border border-gray-300 rounded-md" type="text" onChange={(e) => setLastName(e.target.value)} />
                    </div>
                
                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="password">Amount:</label>
                        <input className="p-2 outline-none border border-gray-300 rounded-md" type="text" onChange={(e) => setAmount(e.target.value)} required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="Email">Customer Email:</label>
                        <input className="p-2 outline-none border border-gray-300 rounded-md" type="email" onChange={(e) => setcusEmail(e.target.value)} required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="password">Date:</label>
                        <input className="p-2 outline-none border border-gray-300 rounded-md" type="date" value={(e) => setDates(dateFormat)} required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="password">Mode of Payment:</label>
                        <select className="p-2 outline-none border border-gray-300 rounded-md">
                            <option hidden>Select mode of payment</option>
                            { modeOfPayments?.map(payment => (
                                <option value={payment.id}>{payment.payment}</option>
                            )) }
                        </select>
                        
                    </div>

                    <button className="bg-blue-500 text-gray-100 rounded-md p-2 w-1/4 self-end">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateReceipt;