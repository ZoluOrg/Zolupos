using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Modules.Inventory.Core.Command
{
    /// <summary>
    /// Add new stocks.
    /// </summary>
    /// <param name="id">Id of the product restocked</param>
    /// <param name="amount">Amount of new stocks</param>
    public record RestockCommand(int id, int amount) : IRequest<int>;
}
