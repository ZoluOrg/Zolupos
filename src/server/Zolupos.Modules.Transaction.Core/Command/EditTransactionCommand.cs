﻿using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transaction.Core.Annotation;

namespace Zolupos.Modules.Transaction.Core.Command
{
    /// <summary>
    /// Edit a trasnaction with the given id
    /// </summary>
    /// <param name="editedTransaction">Transaction with the desired changes</param>
    /// <param name="id">Id of the transaction that will be updated</param>
    public record EditTransactionCommand(EditTransactionRequest model, int id) : IRequest<int>;
}
