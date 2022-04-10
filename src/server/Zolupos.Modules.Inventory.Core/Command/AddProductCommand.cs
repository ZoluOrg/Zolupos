using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.DTO;
using Zolupos.Modules.Inventory.Core.Entity;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Inventory.Core.Command
{
    /// <summary>
    /// 
    /// </summary>
    /// <param name="productString"></param>
    public record AddProductCommand : IRequest<ResultWrapper<int>>
    {
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
