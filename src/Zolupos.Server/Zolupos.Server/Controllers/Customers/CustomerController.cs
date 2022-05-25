using Microsoft.AspNetCore.Mvc;
using Zolupos.Application.Features.Customers;

namespace Zolupos.Server.Controllers.Customers
{
    public class CustomerController : ApiControllerBase
    {
        [HttpGet]
        public async Task<ActionResult> FetchAllCustomers ()
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
