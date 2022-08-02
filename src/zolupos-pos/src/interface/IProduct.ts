export interface IProduct {
  productId: number;
  productName: string;
  productManufacturer: string;
  productType: string;
  productQuantity: number;
  productBarcode: string;
  withVat: boolean;
  productUnitPrice: number;
  productUnitCost: number;
}