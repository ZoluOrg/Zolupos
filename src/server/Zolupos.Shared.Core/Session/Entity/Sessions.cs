using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Employee.Core.Entity;
using Zolupos.Modules.Employee.Core.Enum;

namespace Zolupos.Shared.Core.Session.Entity
{
    public class Sessions
    {
        public string SessionId { get; set; }
        public Employees Employee { get; set; }
    }
}
