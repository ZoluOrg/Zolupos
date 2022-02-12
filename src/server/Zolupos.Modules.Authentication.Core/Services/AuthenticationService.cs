﻿using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Authentication.Core.Model;
using Zolupos.Modules.Employee.Core.Entity;
using Zolupos.Shared.Core.Model;

namespace Zolupos.Modules.Authentication.Core.Services
{
    public static class AuthenticationService
    {
        public static async Task<string> GenerateToken(Employees employee, Settings settings)
        {
            Console.WriteLine($"In Generate Token: {settings.Secret}");
            var handler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(settings.Secret);
            var descriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", employee.Id.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = handler.CreateToken(descriptor);
            return handler.WriteToken(token);
        }
    }
}
