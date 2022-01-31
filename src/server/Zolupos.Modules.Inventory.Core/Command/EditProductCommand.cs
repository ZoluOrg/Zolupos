using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Modules.Inventory.Core.Command
{
    public record EditProductCommand(string editedTransaction, int id) : IRequest<int>;
}
