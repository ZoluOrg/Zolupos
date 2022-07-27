using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Entities;
using Zolupos.Shared.Model;

namespace Zolupos.Application.Features.Employees
{
    public record UploadEmployeeProfileCommand (IFormFile profile, int id) : IRequest<Unit>;
    public class UploadEmployeeProfileHandler : IRequestHandler<UploadEmployeeProfileCommand, Unit>
    {
        private IWebHostEnvironment _env;
        private IApplicationDbContext _context;
        public UploadEmployeeProfileHandler(IWebHostEnvironment env, IApplicationDbContext context)
        {
            _env = env;
            _context = context;
        }

        public async Task<Unit> Handle(UploadEmployeeProfileCommand request, CancellationToken cancellationToken)
        {
            var employee = await _context.Employees.Where(emp => emp.EmployeeId == request.id).FirstOrDefaultAsync();
            if (employee == null) throw new CustomError(Message: "Employee does not exist", Errors: "", StatusCode: System.Net.HttpStatusCode.NotFound);
            var profPath = await UploadProfilePicture(request, employee);
            employee.Profile = profPath;
            await _context.SaveChangesAsync();
            return Unit.Value;
        }

        public async Task<string> UploadProfilePicture(UploadEmployeeProfileCommand profile, Employee employee)
        {
            if (profile.profile != null)
            {
                var profileFolder = Path.Combine(_env.ContentRootPath, "Static", "Employees", "ProfileImages");
                var fileName = $"{Guid.NewGuid()}-{employee.FullName}-{profile.profile.FileName}";
                var fullPath = Path.Combine(profileFolder, fileName);
                using (var writer = new FileStream(fullPath, FileMode.Create))
                {
                    await profile.profile.CopyToAsync(writer);
                }
                return fileName;
            }
            return null;
        }
    }
}
