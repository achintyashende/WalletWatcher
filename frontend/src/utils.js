import { toast } from 'react-toastify';

export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right'
    })
}

export const handleError = (msg) => {
    toast.error(msg, {
        position: 'top-right'
    })
}

// export const APIUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';
export const APIUrl = "https://walletwatcher-backend.onrender.com";
