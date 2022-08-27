using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PaperRings.Entities
{
    public class Device
    {
        public int DeviceId { get; set; }
        public string DeviceName { get; set; }
        public DateTime LastRegistration { get; set; }
        public virtual ICollection<Transaction> Transactions { get; set; }
    }
}
