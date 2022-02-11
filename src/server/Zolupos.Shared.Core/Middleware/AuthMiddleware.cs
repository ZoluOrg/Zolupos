using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Employee.Infrastructure.Context;
using Zolupos.Shared.Core.Model;

namespace Zolupos.Shared.Core.Middleware
{
    public class AuthMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly Settings _settings;

        public AuthMiddleware(RequestDelegate next, IOptions<Settings> settings)
        {
            _next = next;
            _settings = settings.Value;
        }

        public async Task Invoke(HttpContext context, IMediator mediator, IEmployeeDbContext dbContext)
        {
            Console.WriteLine("JWT");
            var authToken = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            if (authToken != null) await AttachUser(context, dbContext, authToken) ;
            await _next(context);
        }

        public async Task AttachUser(HttpContext context, IEmployeeDbContext dbContext, string token)
        {
            var handler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_settings.Secret);
            handler.ValidateToken(token, new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false,
                ClockSkew = TimeSpan.Zero
            }, out SecurityToken validatedToken);
            var jwt = (JwtSecurityToken)validatedToken;
            var id = int.Parse(jwt.Claims.First(c => c.Type == "id").Value);
            context.Items["Employee"] = dbContext.Employees.FirstOrDefaultAsync(emp => emp.Id == id);
        }
    }
}
