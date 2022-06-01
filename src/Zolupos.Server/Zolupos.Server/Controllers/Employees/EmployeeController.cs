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
    }
}
