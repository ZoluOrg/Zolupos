import Cookies from "js-cookie";

export const GetCookieAuthBearer = () => {
  return { Authorization: `Bearer ${Cookies.get("zolupos-employee-token")}` };
}