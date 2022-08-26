using CruelSummer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using PaperRings.Context;
using PaperRings.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PaperRings.Feature.JWT
{
    [ExtendObjectType("Mutation")]
    public class JWTMutation
    {
        public async Task<JWTResponse> Login([Service] ApplicationDbContext context, [Service] IOptions<Settings> Settings, string fullName, int pin)
        {
            var employee = await context.Employees.Where(emp => emp.FullName == fullName && emp.Pin == pin).FirstOrDefaultAsync();
            if (employee == null)
            {
                var error = ErrorBuilder.New().SetMessage("Wrong credentials").SetCode("ZL_EMP_NTF").Build();
                throw new GraphQLException(error);
            }
            var token = await JWTService.GenerateToken(employee, Settings.Value);

            //TODO: Return expiration date with the token
            return new JWTResponse
            {
                Token = token,
                Employee = employee,
                ExpirationDate = DateTime.UtcNow,
            };
        }
    }
}
