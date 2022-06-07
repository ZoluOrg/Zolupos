using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Employees
{
    public class AddEmployeeCommand : IRequest
    {
        public string UserName { get; set; }
        public string Pin { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
    }
    public class AddEmployeeHandler : IRequestHandler<AddEmployeeCommand>
    {
        private UserManager<IdentityUser> _userManager;
        private IMapper _mapper;
        public AddEmployeeHandler(UserManager<IdentityUser> userManager, IMapper mapper)
        {
            _userManager = userManager;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(AddEmployeeCommand request, CancellationToken cancellationToken)
        {
            var employee = new IdentityUser
            {
                UserName = request.UserName,
                PhoneNumber = request.Phone,
                Email = request.Email
            };

            var result = await _userManager.CreateAsync(employee, request.Pin);
            if (!result.Succeeded)
            {
                foreach(IdentityError error in result.Errors)
                {
                    Console.WriteLine(error.Description);
                }
            }
            if (result.Succeeded)
            {
                Console.WriteLine("done?");
            }
            return Unit.Value;
        }
    }
}
