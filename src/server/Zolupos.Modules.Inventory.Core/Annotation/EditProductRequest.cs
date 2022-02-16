using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.Entity;

namespace Zolupos.Modules.Inventory.Core.Annotation
{
    public class EditProductRequest
    {
        public Product EditedProduct { get; set; }
    }
}
