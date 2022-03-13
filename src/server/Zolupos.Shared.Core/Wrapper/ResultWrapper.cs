using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Shared.Core.Interface;

namespace Zolupos.Shared.Core.Wrapper
{
    public class ResultWrapper : IResultWrapper
    {
        public string Message { get; set; }
    }

    public class ResultWrapper<T> : ResultWrapper, IResultWrapper
    {
        public T Value { get; set; }
    }
}
