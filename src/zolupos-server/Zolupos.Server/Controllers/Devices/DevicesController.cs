using Microsoft.AspNetCore.Mvc;
using Zolupos.Application.Features.Devices;

namespace Zolupos.Server.Controllers.Devices
{
    public class DevicesController : ApiControllerBase
    {
        [HttpPost]
        public async Task<ActionResult> AddDevice(AddDeviceCommand command)
        {
            var result = await Mediator.Send(command);
            return Ok(result);
        }
        [HttpDelete]
        public async Task<ActionResult> DeleteDevice(DeleteDeviceCommand command)
        {
            var result = await Mediator.Send(command);
            return Ok(result);
        }
    }
}
