using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Application.Common.Wrapper
{
    public class ResultWrapper<DataType>
    {
        public DataType Receive { get; set; }
        public string Message { get; set; }
    }
}
