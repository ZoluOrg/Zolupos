﻿using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Inventory.Core.Command
{
    /// <summary>
    /// Add new stocks.
    /// </summary>
    /// <param name="id">Id of the product restocked</param>
    /// <param name="amount">Amount of new stocks</param>
    public record RestockCommand : IRequest<ResultWrapper<int>>
    {
        public int id { get; set; }
        public int amount { get; set; }
    }
}
