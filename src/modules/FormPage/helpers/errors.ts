export const eT = "Please agree to the terms and conditions first!";
export const sT = "Your details have been submitted!";

type ErrorMessages = {
  [key: number]: string;
};
export const eS: ErrorMessages = {
  500: "Something went wrong, please try again later!",
  400: "Please fill in all the fields correctly!",
};
