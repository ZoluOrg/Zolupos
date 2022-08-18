using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Shared.Model;

namespace Zolupos.Application.Features.Devices
{
    public record DeleteDeviceCommand(int id) : IRequest<ResultWrapper<Unit>>;
    public class DeleteDeviceHandler : IRequestHandler<DeleteDeviceCommand, ResultWrapper<Unit>>
    {
        private IApplicationDbContext _context;
        public DeleteDeviceHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ResultWrapper<Unit>> Handle(DeleteDeviceCommand request, CancellationToken cancellationToken)
        {
            var deviceToDelete = await _context.Devices.Where(device => device.DeviceId == request.id).FirstOrDefaultAsync();
            if (deviceToDelete == null) throw new CustomError(Message: "Device not found.", Errors: "What's This?", StatusCode: System.Net.HttpStatusCode.NotFound);
            _context.Devices.Remove(deviceToDelete);
            await _context.SaveChangesAsync();
            return new ResultWrapper<Unit> { Message = "", Receive = Unit.Value };
        }
    }
}
