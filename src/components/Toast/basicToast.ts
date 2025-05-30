import toast from 'react-hot-toast';

export const ErrorToast = (value: string) => toast.error(value);
export const SuccessToast = (value: string) => toast.success(value);
