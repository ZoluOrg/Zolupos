using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Enums;

namespace Zolupos.Application.Entities
{
    public class Payment
    {
        public int PaymentId { get; set; }
        public PaymentType PaymentType { get; set; }
        public int Tendered { get; set; }
        public int Change { get; set; }
        public int Amount { get; set; }
        public virtual Transaction Transaction { get; set; }
    }
}
