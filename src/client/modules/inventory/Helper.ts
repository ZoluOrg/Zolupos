import axios from "axios";
import Cookies from "js-cookie";

export const getProducts = async () => {
  const token = Cookies.get("zoluken");
  let request = await axios
    .get("https://localhost:7116/api/Inventory", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error) => {
      return null;
    });
	const blobUrl = URL.createObjectURL(new Blob([JSON.stringify(request,null,4)],{type:'application/json'}));
	return blobUrl;
};
