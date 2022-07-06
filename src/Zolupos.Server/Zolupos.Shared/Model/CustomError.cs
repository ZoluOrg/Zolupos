using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Shared.Model
{
    public class CustomError : Exception
    {
        public string Error { get; set; }
        public HttpStatusCode HttpStatusCode { get; set; }
        public CustomError(string Message, string Errors, HttpStatusCode StatusCode = HttpStatusCode.InternalServerError) : base(Message)
        {
            HttpStatusCode = StatusCode;
            Error = Errors;
        }
    }
}
