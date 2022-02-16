using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.Annotation;
using Zolupos.Modules.Inventory.Core.Entity;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Inventory.Core.Command
{
    /// <summary>
    /// Edit Product Details
    /// </summary>
    /// <param name="editedProduct">Product with the desired changes.</param>
    /// <param name="id">Id of the product to edit.</param>
    public record EditProductCommand(EditProductRequest model, int id) : IRequest<ResultWrapper<Product>>;
}
