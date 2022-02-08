using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Zolupos.Modules.Employee.Core.Entity;
using Zolupos.Modules.Employee.Core.Queries;
using Zolupos.Shared.Core.Session;
using Zolupos.Shared.Core.Session.Command;
using Zolupos.Shared.Core.Utilities;

namespace Zolupos.Modules.Employee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private readonly IMediator _mediator;
        public EmployeeController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet]
        public async Task<ActionResult<List<Employees>>> GetAllEmployees()
        {
            var result = await _mediator.Send(new GetAllEmployeesQuery());
            return Ok(result);
        }
        [HttpGet("/login")]
        public async Task<ActionResult<string>> Login()
        {
            var body = await BodyUtilities.GetBody(HttpContext);
            return await _mediator.Send(new LoginCommand(body));
        }
    }
}
