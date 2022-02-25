import { toast } from "react-toastify";

export const wrongCredentials = () =>
  toast.error("Credentials Wrong!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

