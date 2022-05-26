using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Entities;
using Zolupos.Application.Features.Customers;
using Zolupos.Application.Features.Products;
using Zolupos.Application.Features.Transactions;

namespace Zolupos.Application.Map
{
    public class AppliationMapper : Profile
    {
        public AppliationMapper()
        {
            CreateMap<AddProductCommand, Product>().ReverseMap();
            CreateMap<AddCustomerCommand, Customer>().ReverseMap();
            CreateMap<AddTransactionCommand, Transaction>().ReverseMap();
        }
    }
}
