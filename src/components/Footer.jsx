import DateFormat from "./DateFormat";

const Footer = ({ department }) => {

    return (
        <footer>
            <p>Date Issued: </p>
            <p><DateFormat date={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`} /></p>
        </footer>

    )

}

 

export default Footer;