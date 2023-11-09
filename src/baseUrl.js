export const baseUrl = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return 'http://localhost:8080/api/v1/eor';
    } else {
        return 'production link';
    }
}