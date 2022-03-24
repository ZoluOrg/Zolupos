import React, {HTMLProps} from "react";

interface tableProps extends HTMLProps<HTMLTableElement> {}
interface thProps extends HTMLProps<HTMLTableHeaderCellElement> {}
interface tdProps extends HTMLProps<HTMLTableDataCellElement> {}

export const Table: React.FC = ({children}) => {
  return <table className="table-auto"></table>;
};

export const Th: React.FC = ({children}) => {
	return <th className="p-5"></th>
};

export const Td:React.FC = ({children}) => {
	return <td className="p-5"></td>
}
