using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.DTO;
using Zolupos.Modules.Inventory.Core.Entity;

namespace Zolupos.Modules.Inventory.Core.Command
{
    public record AddProductCommand(string productString) : IRequest<List<int>>;
}
