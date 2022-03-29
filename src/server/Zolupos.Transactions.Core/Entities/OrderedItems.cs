using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.Entity;

namespace Zolupos.Transactions.Core.Entities
{
    public class OrderedItems
    {
        public int Id { get; set; }
        public int ProductRef { get; set; }
        public int TransacactionRef { get; set; }
        public OrderTransactions ParentTransaction { get; set; }
    }
}
