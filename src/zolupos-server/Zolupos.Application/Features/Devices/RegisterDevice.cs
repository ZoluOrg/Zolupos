using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;
using Zolupos.Shared.Model;

namespace Zolupos.Application.Features.Devices
{
    public record RegisterDeviceQuery(string deviceName) : IRequest<ResultWrapper<Device>>;
    public class RegisterDeviceHandler : IRequestHandler<RegisterDeviceQuery, ResultWrapper<Device>>
    {
        private IApplicationDbContext _context;
        public RegisterDeviceHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ResultWrapper<Device>> Handle(RegisterDeviceQuery request, CancellationToken cancellationToken)
        {
            var device = await _context.Devices.Where(device => device.DeviceName == request.deviceName).FirstOrDefaultAsync();
            if (device == null) throw new CustomError(Message: "Device not found. Contact administrator.", Errors: "", StatusCode: System.Net.HttpStatusCode.NotFound);
            return new ResultWrapper<Device> { Message = "", Receive = device };
        }
    }
}
