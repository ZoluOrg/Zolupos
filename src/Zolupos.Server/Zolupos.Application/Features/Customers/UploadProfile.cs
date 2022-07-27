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

namespace Zolupos.Application.Features.Customers
{
    public record UploadProfileCommand(IFormFile profile, int id)  : IRequest<Unit>;
    public class UploadProfileHandler : IRequestHandler<UploadProfileCommand, Unit>
    {
        private IApplicationDbContext _context;
        private IWebHostEnvironment _env;
        public UploadProfileHandler(IWebHostEnvironment env, IApplicationDbContext context)
        {
            _env = env;
            _context = context;
        }

        public async Task<Unit> Handle(UploadProfileCommand request, CancellationToken cancellationToken)
        {
            var customer = await _context.Customers.Where(cs => cs.CustomerId == request.id).FirstOrDefaultAsync();
            var profilePath = await UploadProfilePicture(request, customer);
            customer.CustomerProfile = profilePath;
            await _context.SaveChangesAsync();
            return Unit.Value;
        }

        public async Task<string> UploadProfilePicture(UploadProfileCommand profile, Customer customer)
        {
            if (profile.profile != null)
            {
                var profileFolder = Path.Combine(_env.ContentRootPath, "Static", "Customers", "ProfileImages");
                var fileName = $"{Guid.NewGuid().ToString()}-{customer.CustomerFullName}-{profile.profile.FileName}";
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
