using Microsoft.AspNetCore.Mvc;
using Zolupos.Application.Features.Employees;

namespace Zolupos.Server.Controllers.Employees
{
    public class EmployeeController : ApiControllerBase
    {
        [HttpGet]
        public async Task<ActionResult> FetchAllEmployees()
        {
            var employees = await Mediator.Send(new FetchAllEmployeesQuery());
            return Ok(employees);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult> FetchEmployeeById(int Id)
        {
            var employee = await Mediator.Send(new FetchEmployeeByIdQuery(Id));
            return Ok(employee);
        }

        [HttpPost]
        public async Task<ActionResult> PostEmployee(AddEmployeeCommand command)
        {
            var result = await Mediator.Send(command);
            return Ok(result);
        }
        [HttpDelete("{Id:int}")]
        public async Task<ActionResult> DeleteEmployee(int Id)
        {
            var result = await Mediator.Send(new DeleteEmployeeCommand(Id));
            return Ok(result);
        }
    }
}
