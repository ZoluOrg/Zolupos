import axios from "axios";
import Cookies from "js-cookie";
import { IProduct } from "../../interfaces/IProduct";
import { IResultWrapper } from "../../wrapper/ResultWrapper";

export const getProducts = async () => {
  const token = Cookies.get("zoluken");
  let request = await axios
    .get<IResultWrapper<Array<IProduct>>>("https://localhost:7116/api/Inventory", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error) => {
      return null;
    });
	return request?.data;
};
