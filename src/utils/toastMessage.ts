import { toast, ToastOptions } from 'react-toastify';

export const toastMessage =(type: string, message: string)=>{

    if(!message || message === '') return
    switch(type){
        case "success":
            return toast.success(message)
        case "info":
            return toast.info(message)
        case "error": 
            return toast.error(message)
        default:
            return toast(message)
    }    
}