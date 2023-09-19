const DateFormat = ({ date }) => {

    const monthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const formatDate = `${date.split('-')[2]} ${monthList[Number(date.split('-')[1] - 1)]} ${date.split('-')[0]}`;

    return formatDate
}

export default DateFormat;