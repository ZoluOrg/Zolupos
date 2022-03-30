using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.Entity;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Inventory.Core.Command
{
    /// <summary>
    /// Edit Product Details
    /// </summary>
    /// <param name="editedProduct">Product with the desired changes.</param>
    /// <param name="id">Id of the product to edit.</param>
    public class EditProductCommand : IRequest<ResultWrapper<Product>>
    {
        public int ProductId { get; set; }
        public DateTime LastEdit { get; set; }
        public DateTime LastRestock { get; set; }
        public string ProductName { get; set; }
        public string BarCode { get; set; }
        public string ProductManufacturer { get; set; }
        public string ProductType { get; set; }
        public int ProductQuantity { get; set; }
        public int ProductRetailCost { get; set; }
        public int ProductWholeSaleCost { get; set; }
    }
}
