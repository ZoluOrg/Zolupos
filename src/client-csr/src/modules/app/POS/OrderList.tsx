import React from "react";
import { useTransactionContext } from "../../../context/TransactionContext";
import { AddedItem } from "./AddedItem";
import styles from "../../../styles/app/POS/OrderList.module.scss";

export const OrderList = () => {
  const transactionContext = useTransactionContext();
  return (
    <div className="bg-mallow-2 rounded-lg xl:w-9/12 lg:w-3/5 sm:w-6/12 flex flex-col overflow-hidden h-full">
      <div className={styles.orderListContainer}>
        {transactionContext.punched.length != 0 ?
          <div className={styles.withDataContainer}>
            <div className={styles.top}>
              <span>Item</span>
              <span>Qty</span>
              <span>Price</span>
              <span>Disc</span>
              <span>Amt</span>
            </div>
            <div className="h-full overflow-y-auto">
              {transactionContext.punched.map(prod => <AddedItem itemName={prod.productName} barCode={prod.productBarcode} price={prod.productPrice} />)}
            </div>
          </div> :
          <div className={styles.withoutDataContainer}>
            <span className="font-bold opacity-50 text-4xl">
              Scan items to add
            </span>
            <span className="font-bold opacity-50 text-lg">
              Use alt + a to manually add an item
            </span>
          </div>
        }
      </div>
    </div>
  );
};
