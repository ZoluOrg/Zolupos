using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Zolupos.Modules.Employee.Core.Annotation;
using Zolupos.Modules.Employee.Core.Command;
using Zolupos.Modules.Employee.Core.DTO;
using Zolupos.Modules.Employee.Core.Entity;
using Zolupos.Modules.Employee.Core.Queries;
using Zolupos.Shared.Core.Model;
using Zolupos.Shared.Core.Utilities;

namespace Zolupos.Modules.Employee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private readonly IMediator _mediator;
        private readonly Settings _settings;
        public EmployeeController(IMediator mediator, IOptions<Settings> settings)
        {
            _mediator = mediator;
            _settings = settings.Value;
        }
        [HttpGet]
        [Authorize(Roles = "Admin, Employee")]
        public async Task<ActionResult<List<Employees>>> GetAllEmployees()
        {
            Console.WriteLine(_settings.Secret);
            var result = await _mediator.Send(new GetAllEmployeesQuery());
            return Ok(result);
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> AddEmployee(AddEmployeeRequest employee)
        {
            if (employee == null) return BadRequest(new { message = "Employee Invalid" });
            var id = await _mediator.Send(new AddEmployeeCommand(employee));
            return Ok(id);
        }
    }
}
