const Delete = ({ setOpenDelete,record }) => {

    const deleteReceipt = async () => {
        try {
            const data = await axios.delete(`http://192.168.50.48:8080/api/v1/eor/transactions/${record.id}`);
            alert(`Delete successful for id ${id}`);
            location.reload();
        } catch(err) {
            console.log(err);
        }
    }

    return (
        // Prompt modal box
        <div className="absolute top-0 left-0 h-full bg-black w-full bg-opacity-50 flex items-center justify-center">
            <form className="bg-white p-5 rounded-md">
                <h1 className="text-xl">Are you sure you want to delete this record for {record.names}?</h1>

                <div className="flex items-center justify-center gap-2 mt-3">
                    <button onClick={deleteReceipt} className="p-2 rounded-md bg-green-500 text-white w-20">Yes</button>
                    <button onClick={() => setOpenDelete(false)} className="p-2 rounded-md bg-red-500 text-white w-20">No</button>
                </div>
            </form>
        </div>
    )
}

export default Delete;