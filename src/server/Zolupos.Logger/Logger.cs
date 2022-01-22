using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Logger.Model;
using Zolupos.Logger.Enum;

namespace Zolupos.Logger
{
    public class Logger
    {
        private Queue<LoggingMessage> _loggerQueue;
        private volatile bool _isLogging;

        public Logger()
        {
            _loggerQueue = new();
            _isLogging = false;
        }

        private async Task LoggerLoop()
        {
            while (_isLogging)
            {
                if (_loggerQueue.Count < 0) WriteToDisk(_loggerQueue.Peek());
            }
        }

        public async Task Emerg(string message, string? loggingAt)
        {
            var log = new LoggingMessage
            {
                Message = message,
                LoggingAt = loggingAt,
                LoggedAt = DateTime.Now,
                Severity = LogSeverity.Emerg,
            };
            _loggerQueue.Enqueue(log);
        }

        public async Task Alert(string message, string? loggingAt)
        {
            var log = new LoggingMessage
            {
                Message = message,
                LoggingAt = loggingAt,
                LoggedAt = DateTime.Now,
                Severity = LogSeverity.Alert,
            };
            _loggerQueue.Enqueue(log);
        }

        public async Task Crit(string message, string? loggingAt)
        {
            var log = new LoggingMessage
            {
                Message = message,
                LoggingAt = loggingAt,
                LoggedAt = DateTime.Now,
                Severity = LogSeverity.Crit,
            };
            _loggerQueue.Enqueue(log);
        }

        public async Task Err(string message, string? loggingAt)
        {
            var log = new LoggingMessage
            {
                Message = message,
                LoggingAt = loggingAt,
                LoggedAt = DateTime.Now,
                Severity = LogSeverity.Err,
            };
            _loggerQueue.Enqueue(log);
        }

        public async Task Warning(string message, string? loggingAt)
        {
            var log = new LoggingMessage
            {
                Message = message,
                LoggingAt = loggingAt,
                LoggedAt = DateTime.Now,
                Severity = LogSeverity.Warning,
            };
            _loggerQueue.Enqueue(log);
        }

        public async Task Notice(string message, string? loggingAt)
        {
            var log = new LoggingMessage
            {
                Message = message,
                LoggingAt = loggingAt,
                LoggedAt = DateTime.Now,
                Severity = LogSeverity.Notice,
            };
            _loggerQueue.Enqueue(log);
        }

        public async Task Info(string message, string? loggingAt)
        {
            var log = new LoggingMessage
            {
                Message = message,
                LoggingAt = loggingAt,
                LoggedAt = DateTime.Now,
                Severity = LogSeverity.Info,
            };
            _loggerQueue.Enqueue(log);
        }

        public async Task Debug(string message, string? loggingAt)
        {
            var log = new LoggingMessage
            {
                Message = message,
                LoggingAt = loggingAt,
                LoggedAt = DateTime.Now,
                Severity = LogSeverity.Debug,
            };
            _loggerQueue.Enqueue(log);
        }

        private async Task WriteToDisk(LoggingMessage logMessage)
        {
            string message = $"[{logMessage.LoggedAt}] [{logMessage.LoggingAt}] [{logMessage.Severity}] {logMessage.Message}";
            using (var writer = new StreamWriter("C:\\Users\\josti\\Log.txt"))
            {
                await writer.WriteAsync(message);
                var res = _loggerQueue.TryDequeue(out logMessage);
                Console.WriteLine(res);
            }
        }
    }
}
