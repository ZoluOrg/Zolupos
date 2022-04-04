using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Shared.Core;

namespace Zolupos.Modules.Transactions.Core.Exceptions
{
    public class InventoryException : BaseException
    {
        public InventoryException(string message, HttpStatusCode statusCode) : base(message, status: statusCode)
        { }
    }
}
