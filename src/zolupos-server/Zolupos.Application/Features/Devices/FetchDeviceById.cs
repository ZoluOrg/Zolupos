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
    public record FetchDeviceByIdQuery(int id) : IRequest<ResultWrapper<Device>>;
    public class FetchDeviceByIdHandler : IRequestHandler<FetchDeviceByIdQuery, ResultWrapper<Device>>
    {
        private IApplicationDbContext _context;
        public FetchDeviceByIdHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ResultWrapper<Device>> Handle(FetchDeviceByIdQuery request, CancellationToken cancellationToken)
        {
            var device = await _context.Devices.Where(device => device.DeviceId == request.id).FirstOrDefaultAsync();
            if (device == null) throw new CustomError(Message: "Device does not exist", Errors: "What's This", StatusCode: System.Net.HttpStatusCode.NotFound);
            return new ResultWrapper<Device> { Message = "", Receive = device };
        }
    }
}
