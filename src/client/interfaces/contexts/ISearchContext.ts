import { IProduct } from "../inventory/IProduct";

export interface ISearchContext {
	searched: Array<IProduct>;
	searchedInput: string;
	selected: number;
	isSearching: boolean;
	searchProduct: (filter: string) => void;
	setSearchedInput: (filter: string) => void;
	resetSearch: () => void;
	setIsSearching: (bool: boolean) => void;
	setSelected: (idx: number) => void;
}