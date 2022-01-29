using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.Entity;

namespace Zolupos.Modules.Inventory.Core.Model
{
    public class AddProductRequestModel
    {
        public List<Product> Products { get; set; }
    }
}
