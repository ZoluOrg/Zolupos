using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Security.Claims;
using Zolupos.Modules.Authentication.Core.Annotation;
using Zolupos.Shared.Core.Model;
using Zolupos.Modules.Employee.Core.Entity;

namespace Zolupos.Modules.Authentication.Core.Services
{
    public static class AuthService
    {
        public static async Task<string> GenerateToken(Employees employee, Settings settings)
        {

            var handler = new JwtSecurityTokenHandler();
            var secret = Encoding.ASCII.GetBytes(settings.Secret);
            Console.WriteLine(secret);
            var descriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, employee.FirstName),
                    new Claim(ClaimTypes.Role, employee.Role)
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(secret), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = handler.CreateToken(descriptor);
            return handler.WriteToken(token);
        }
    }
}
