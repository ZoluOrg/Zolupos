using Microsoft.AspNetCore.Mvc;
using Zolupos.Application.Features.Devices;

namespace Zolupos.Server.Controllers.Devices
{
    public class DevicesController : ApiControllerBase
    {
        [HttpGet]
        public async Task<ActionResult> FetchAllDevices()
        {
            var results = await Mediator.Send(new FetchAllDevicesQuery());
            return Ok(results);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult> FetchAllDevices(int id)
        {
            var results = await Mediator.Send(new FetchDeviceByIdQuery(id));
            return Ok(results);
        }

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
