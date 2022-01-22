using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Logger.Enum;

namespace Zolupos.Logger.Model
{
    public struct LoggingMessage
    {
        public string Message;
        public string? LoggingAt;
        public DateTime LoggedAt;
        public LogSeverity Severity;
    }
}
