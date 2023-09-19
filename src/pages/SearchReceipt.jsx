import { useState } from "react"
import axios from "axios"

const SearchReceipt = () => {
    const [id,setId] = useState("");

    const [receipt,setReceipt] = useState({});

    const searchId = async (e) => {
        e.preventDefault();
        
        if(id) {
            try {
                const res = await axios.get(`http://localhost:8080/api/v1/api/${id}`)
                setReceipt(res.data);
                
            } catch (error) {
                console.log(error);
            }
        }


    }

    return (
        <div>
            <h1>Search ID to Generate Receipt</h1>
            <form className="flex flex-col p-2 w-1/2 gap-2" onSubmit={searchId}>
            <input className="p-2 border border-gray-300" type="search" onChange={(e)=> setId(e.target.value)} />
                <button className="bg-blue-500 text-white p-2 w-1/2 rounded-md">Submit</button>
                
            </form>
            
            {id !== '' ?
            <div>
                <h1>{receipt.names}</h1>
                <h1>{receipt.or_number}</h1>
                <h1>{receipt.cus_email}</h1>
                <h1>{receipt.amount}</h1>
                <h1>{receipt.rep_acc}</h1>
                <h1>{receipt.customer_no}</h1>
                
            </div>
            :
            <div>
                <h1>Nothing to display</h1>
            </div>
        }
        </div>
    )

}
export default SearchReceipt