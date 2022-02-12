using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Employee.Core.Annotation;
using Zolupos.Modules.Employee.Core.DTO;
using Zolupos.Modules.Employee.Core.Entity;

namespace Zolupos.Modules.Employee.Core.Map
{
    public class EmployeesProfile : Profile
    {
        public EmployeesProfile()
        {
            CreateMap<Employees, EmployeesDTO>();
            CreateMap<AddEmployeeRequest, Employees>();
        }
    }
}
