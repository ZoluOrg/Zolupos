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

namespace Zolupos.Application.Features.Devices
{
    public record FetchAllDevicesQuery() : IRequest<ResultWrapper<ICollection<Device>>>;
    public class FetchAllDevicesHandler : IRequestHandler<FetchAllDevicesQuery, ResultWrapper<ICollection<Device>>>
    {
        private IApplicationDbContext _context;
        public FetchAllDevicesHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ResultWrapper<ICollection<Device>>> Handle(FetchAllDevicesQuery request, CancellationToken cancellationToken)
        {
            var devices = await _context.Devices.ToListAsync();
            return new ResultWrapper<ICollection<Device>> { Message = "", Receive = devices };
        }
    }
}
