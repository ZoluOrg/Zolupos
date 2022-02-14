using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Modules.Authentication.Core.Annotation
{
    public class AuthenticateRequest
    {
        public string FirstName { get; set; }
        public string Pin { get; set; }
    }
}
