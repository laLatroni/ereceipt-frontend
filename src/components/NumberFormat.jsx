const NumberFormat = ({ amount }) => {
    return new Intl.NumberFormat().format(amount)
}
export default NumberFormat;