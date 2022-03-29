using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Modules.Inventory.Core.DTO
{
    public record GetProductResponse (int ProductId, DateTime LastEdit, DateTime LastRestock, string ProductName, string BarCode, string ProductManufacturer, string ProductType, int ProductQuantity, int ProductRetailCost, int ProductWholeSaleCost);
}
