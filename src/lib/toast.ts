import toast from "react-hot-toast";

export const toastError = (message: string) => {
  toast.error(message || "Something went wrong!", {
    style: {
      border: "0.25px solid rgba(255, 255, 255, 0.2)",
      padding: "12px 30px",
      color: "#EFAD5F",
      background: "linear-gradient(113deg, #353535, #1D1D1D)",
    },
    iconTheme: {
      primary: "#EFAD5F",
      secondary: "#FFFAEE",
    },
  });
};

export const toastSuccess = (message: string) => {
  toast.success(message || "Success!", {
    style: {
      border: "0.25px solid #7FC5A055",
      padding: "12px 30px",
      color: "#7FC5A0",
      background: "linear-gradient(113deg, #353535, #1D1D1D)",
    },
    iconTheme: {
      primary: "#7FC5A0",
      secondary: "#FFFAEE",
    },
  });
};
