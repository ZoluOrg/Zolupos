using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transactions.Core.DTO;
using Zolupos.Modules.Transactions.Core.Entities;
using Zolupos.Modules.Transactions.Core.Commands;

namespace Zolupos.Modules.Transactions.Core.Map
{
    public class TransactionProfile : Profile
    {
        public TransactionProfile()
        {
            CreateMap<OrderTransactions, GetTransactionResponse>().ReverseMap()
                .ForMember(obj => obj.OrderedItems, dst => dst.MapFrom(src=>src.OrderedItems));
            CreateMap<OrderedItems, GetOrderedItemResponse>().ReverseMap();
            CreateMap<AddOrderedItemCommand, OrderedItems>().ReverseMap();
            CreateMap<AddTransactionCommand, OrderTransactions>().ReverseMap();
        }
    }
}
