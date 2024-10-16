﻿using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.DTO;
using Zolupos.Application.Entities;
using Zolupos.Application.Features.Customers;
using Zolupos.Application.Features.Employees;
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
            CreateMap<AddOrderedProduct, OrderedProduct>().ReverseMap();
            CreateMap<AddPayment, Payment>().ReverseMap();
            CreateMap<TransactionDTO, Transaction>().ReverseMap();
            CreateMap<OrderedProductDTO, OrderedProduct>().ReverseMap();
            CreateMap<PaymentDTO, Payment>().ReverseMap();
            CreateMap<AddEmployeeCommand, Employee>().ReverseMap();
            CreateMap<SearchProductResponse, Product>().ReverseMap();
        }
    }
}
