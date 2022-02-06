using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.DTO;

namespace Zolupos.Modules.Inventory.Core.Queries
{
    /// <summary>
    /// Get product with the given id.
    /// </summary>
    /// <param name="id">Product's id</param>
    public record GetProductByIdQuery(int id) : IRequest<ProductDTO>;
}
