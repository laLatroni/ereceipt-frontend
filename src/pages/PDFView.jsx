import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useFetchHook } from '../hooks/useFetchHook';

const PDFView = () => {

    const { id } = useParams();

    const { records,isLoading } = useFetchHook(`http://localhost:8080/api/v1/api/departments/${id}`);

    return (
        <div className="h-screen flex justify-center items-center">
            <form>
                
            </form>
        </div>
    )
}

export default PDFView;