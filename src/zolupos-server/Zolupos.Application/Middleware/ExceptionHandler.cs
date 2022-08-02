using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Zolupos.Shared.Model;

namespace Zolupos.Application.Middleware
{
    public class ExceptionHandler : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next(context);
            }
            catch (Exception exp)
            {
                var response = context.Response;
                response.ContentType = "application/json";

                if (exp is not CustomError && exp.InnerException != null)
                {
                    while (exp.InnerException != null)
                    {
                        exp = exp.InnerException;
                    }
                }

                var httpResponse = new ErrorResponse
                {
                    ExceptionMessage = exp.Message,
                    Source = exp.Source
                };

                switch(exp)
                {
                    case CustomError e:
                        httpResponse.Message = e.Message;
                        response.StatusCode = httpResponse.ErrorCode = (int)e.HttpStatusCode;
                        Console.Write(response.StatusCode);
                        break;  
                    default:
                        Console.WriteLine(exp.GetType());
                        response.StatusCode = (int)System.Net.HttpStatusCode.InternalServerError;
                        break;
                }

                var result = JsonSerializer.Serialize(httpResponse);
                await response.WriteAsync(result);
            }
        }
    }
}
