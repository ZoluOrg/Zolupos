export interface IProduct {
  productName: string;
  barCode: string;
  productManufacturer: string;
  productType: string;
  productQuantity: number;
  productRetailCost: number;
  productWholeSaleCost: number;
  productId: number;
  lastEdit: Date;
  lastRestock: Date;
}