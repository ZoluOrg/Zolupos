using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.DTO;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Inventory.Core.Queries
{
    /// <summary>
    /// Return All Products
    /// </summary>
    public record GetAllProductQuery: IRequest<ResultWrapper<ICollection<GetProductResponse>>>;
}
