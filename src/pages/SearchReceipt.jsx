import { useState } from "react"
import axios from "axios"

const SearchReceipt = () => {

    const [id,setId] = useState("");

    const [receipt,setReceipt] = useState({});

    const searchId = async (e) => {
        e.preventDefault();
        
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/api/${id}`)
            setReceipt(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col items-center py-5 h-screen">
            <img className="w-52" src="/images/cazalogo.png" alt="CAZA Logo" />

            <form className="flex flex-col p-2 w-1/2 gap-2" onSubmit={searchId}>
                <input className="p-2 border border-gray-300 w-1/2 rounded-md outline-none" type="search" onChange={(e)=> setId(e.target.value)} placeholder="Search OR number" />
            </form>

            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Customer No.</th>
                        <th>Dates</th>
                        <th>Amount</th>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )

}
export default SearchReceipt