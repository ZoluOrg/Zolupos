using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Devices
{
    public record AddDeviceCommand(string deviceName) : IRequest<Device>;
    public class AddDeviceHandler : IRequestHandler<AddDeviceCommand, Device>
    {
        private IApplicationDbContext _context;

        public AddDeviceHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Device> Handle(AddDeviceCommand request, CancellationToken cancellationToken)
        {
            var newDevice = new Device
            {
                DeviceName = request.deviceName,
                RegistrationDate = DateTime.UtcNow,
                LastUsed = DateTime.UtcNow,
            };
            await _context.Devices.AddAsync(newDevice);
            await _context.SaveChangesAsync();
            return newDevice;
        }
    }

}
