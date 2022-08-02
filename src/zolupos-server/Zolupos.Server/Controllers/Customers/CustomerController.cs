using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Zolupos.Application.Features.Customers;

namespace Zolupos.Server.Controllers.Customers
{
    [Authorize]
    public class CustomerController : ApiControllerBase
    {
        [HttpGet]
        public async Task<ActionResult> FetchAllCustomers()
        {
            var customers = await Mediator.Send(new FetchAllCustomersQuery());
            return Ok(customers);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult> FetchCustomerById(int Id)
        {
            var customer = await Mediator.Send(new FetchCustomerByIdQuery(Id));
            return Ok(customer);
        }

        [HttpGet("name")]
        public async Task<ActionResult> FetchCustomerByName([FromQuery(Name = "name")] string Name)
        {
            var customer = await Mediator.Send(new FetchCustomerByNameQuery(Name));
            return Ok(customer);
        }

        [HttpPost("uploadProfile")]
        public async Task<ActionResult> UploadProfilePicture([FromQuery(Name ="id")] int id, IFormFile file)
        {
            await Mediator.Send(new UploadProfileCommand(file, id));
            return Ok();
        }

        [HttpPost]
        public async Task<ActionResult> AddProduct(AddCustomerCommand command)
        {
            var customer = await Mediator.Send(command);
            return Ok(customer);
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteProduct(DeleteCustomerCommand command)
        {
            var customer = await Mediator.Send(command);
            return Ok(customer);
        }
    }
}
