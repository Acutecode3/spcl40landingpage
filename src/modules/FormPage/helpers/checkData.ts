import { toastError } from "@/lib/toast";

export type FormDataType = {
  name: string;
  email: string;
  phone: string;
  guardian_name: string;
  guardian_phone: string;
};

export const checkData = (data: FormDataType): boolean => {
  const err = (msg: string) => {
    toastError(msg);
    return false;
  };

  const { name, email, phone, guardian_name, guardian_phone } = data;
  if (!name || !email || !phone || !guardian_name || !guardian_phone)
    return err("All fields are compulsory");

  if (name.length < 3) return err("Name must be at least 3 characters long");

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
    return err("Invalid email format!");

  if (!phone.match(/^(\+91)?( )?\d{10}$/)) return err("Invalid phone number!");

  if (!guardian_name.match(/^[a-zA-Z ]+$/))
    return err("Invalid guardian name!");

  if (!guardian_phone.match(/^(\+91)?( )?\d{10}$/))
    return err("Invalid guardian phone number!");

  return true;
};
