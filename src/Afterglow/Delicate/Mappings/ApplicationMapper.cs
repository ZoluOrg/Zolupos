using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheArcher.Entities;
using static TheArcher.Features.Employees.EmployeeMutations;

namespace TheArcher.Mappings
{
    public class ApplicationMapper : Profile
    {
        public ApplicationMapper()
        {
            CreateMap<AddEmployee, Employee>().ReverseMap();
        }
    }
}
