import Cookies from "js-cookie";

export const getTokenAsBearer = () => {
  return { Authorization: `Bearer ${Cookies.get("zolupos-employee-token")}` };
};

export const GetRawToken = () => {
  return Cookies.get("zolupos-employee-token");
};
