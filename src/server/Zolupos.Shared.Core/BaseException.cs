using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Shared.Core
{
    public class BaseException : Exception
    {
        public string ErrorMessage { get; set; }
        public HttpStatusCode HttpStatus {get; set;}
        public BaseException(string message, HttpStatusCode status = HttpStatusCode.InternalServerError)
        {
            ErrorMessage = message;
            HttpStatus = status;
        }
    }
}
