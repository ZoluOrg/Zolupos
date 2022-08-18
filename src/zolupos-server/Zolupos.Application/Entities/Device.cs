using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Application.Entities
{
    public class Device
    {
        public int DeviceId { get; set; }
        public string DeviceName { get; set; }
        public DateTime RegistrationDate { get; set; }
        public DateTime LastUsed { get; set; }
    }
}
