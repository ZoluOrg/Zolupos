using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Shared.Model
{
    public class ErrorResponse
    {
        public string Source { get; set; }
        public int ErrorCode { get; set; }
        public string ExceptionMessage { get; set; }
        public string Message { get; set; }
    }
}
