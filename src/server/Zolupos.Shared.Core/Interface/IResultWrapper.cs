using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Shared.Core.Interface
{
    public interface IResultWrapper
    {
        string Message { get; set; }
        HttpStatusCode Code { get; set; }
    }
}
