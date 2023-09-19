import Header from "./Header"
import DateFormat from './DateFormat'
import Footer from "./Footer";

const Info = ({ department,idx }) => {

    return (
        <div key={idx} className="ereceipt">
            <Header department={department} />
            <div className="details__container">
                <div className="details">
                    <p>Received from: {department.receive_from}</p>
                    <p>Date: <DateFormat date={department.dates} /></p>
                </div>

                <div className="details">
                    <p>Address: {department.address} </p>
                    <p>Business Style: {department.bus_style}</p>
                </div>

                <div className="details">
                    <p>Received Amount: $ { department.receive_amount } </p>
                    <p>TIN: {department.tin}</p>
                </div>

                <div className="details__tax">
                    <p>Witholding tax: $ { department.with_holding_tax }</p>
                    <p>Mode of Payment: { department.mode_Payment }</p>
                    <p>Particular(s):</p>
                </div>
            </div>
            <Footer department={department} />
        </div>  
    )
}

export default Info