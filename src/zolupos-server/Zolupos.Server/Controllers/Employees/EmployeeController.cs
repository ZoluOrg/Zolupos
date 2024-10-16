﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Zolupos.Application.Features.Employees;

namespace Zolupos.Server.Controllers.Employees
{
    [Authorize]
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

        [HttpPost("uploadProfile")]
        public async Task<ActionResult> UploadProfilePicture([FromQuery(Name ="id")] int id, IFormFile profile)
        {
            await Mediator.Send(new UploadEmployeeProfileCommand(profile, id));
            return Ok();
        }

        [HttpPost]
        public async Task<ActionResult> AddEmployee(AddEmployeeCommand command)
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
