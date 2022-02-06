using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Modules.Inventory.Core.Command
{
    /// <summary>
    /// Edit Product Details
    /// </summary>
    /// <param name="editedProduct">Product with the desired changes.</param>
    /// <param name="id">Id of the product to edit.</param>
    public record EditProductCommand(string editedProduct, int id) : IRequest<int>;
}
