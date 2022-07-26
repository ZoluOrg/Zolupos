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
        public int PaymentType { get; set; }
        public float Tendered { get; set; }
        public float Change { get; set; }
        public float Amount { get; set; }
        public virtual Transaction Transaction { get; set; }
    }
}
