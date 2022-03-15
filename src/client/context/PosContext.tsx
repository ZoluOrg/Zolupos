import React, { createContext, useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { IProduct } from "../interfaces/IProduct";
import { IPosContext } from "../interfaces/PosContext/IPosContext";
import { getProducts } from "../modules/inventory/Helper";
import "react-toastify/dist/ReactToastify.css";

const defaultValues: IPosContext = {
  products: null,
  punched: null,
  addToPunched: (product: IProduct) => null,
  removeToPunched: (product: number) => null,
};

let posContext = createContext(defaultValues);

export const PosContext: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Array<IProduct> | null>([]);
  const [punched, setPunched] = useState<Array<IProduct> | null>([]);
  useEffect(() => {
    const doEffect = async () => {
      let response = await getProducts();
      setProducts(response?.value!);
    };
    doEffect();
  }, []);
  const addPunched = async (product: IProduct) => {
    setPunched((old) => [...old!, product]);
    console.log("🤛");
  };
  const removeToPunched = async (product: number) => {
    setPunched(
      punched?.filter((prPunched) => prPunched.productId !== product)!
    );
    console.log("🤛 out");
  };
  return (
    <posContext.Provider
      value={{
        products: products,
        punched: punched,
        addToPunched: addPunched,
        removeToPunched: removeToPunched,
      }}
    >
      {children}
      <div className="absolute">
        <ToastContainer />
      </div>
    </posContext.Provider>
  );
};

export const usePosContext = () => {
  return useContext(posContext);
};
