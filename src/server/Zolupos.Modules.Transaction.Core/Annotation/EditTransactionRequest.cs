using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transaction.Core.Entity;

namespace Zolupos.Modules.Transaction.Core.Annotation
{
    public class EditTransactionRequest
    {
        public UserTransaction editedTransaction { get; set; }
    }
}
