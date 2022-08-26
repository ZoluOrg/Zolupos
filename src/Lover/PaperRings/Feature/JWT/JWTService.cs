using CruelSummer.Models;
using Microsoft.IdentityModel.Tokens;
using PaperRings.Entities;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace PaperRings.Feature.JWT
{
    public static class JWTService
    {
        public static async Task<string> GenerateToken(Employee employee, Settings settings)
        {
            var handler = new JwtSecurityTokenHandler();
            var secret = Encoding.ASCII.GetBytes(settings.TokenSalt);
            var descriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, employee.EmployeeId.ToString()),
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
