import { toast } from 'react-hot-toast';

export const showLoadingToast = (message = "Loading...") => {
  return toast.loading(message, {
    icon: "🤔",
  });
};

export const showSuccessToast = (message = "Success") => {
  toast.dismiss();
return toast.success(message, {
    duration: 4000,
    position: "top-center",
    icon: "✅",
    iconTheme: { primary: "#4CAF50", secondary: "#fff" },
    style: {
        color: 'white'
    }
});
};

export const showErrorToast = (message = "Something went wrong") => {
  toast.dismiss(); 
  return toast.error(message, {
    duration: 4000,
    position: "top-center",
    icon: "⚠️",
    iconTheme: { primary: "#FF5733", secondary: "#fff" },
  });
};

export const dismissToast = (toastId: string) => {
  toast.dismiss(toastId);
};
