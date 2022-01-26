using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transaction.Core.DTO;
using Zolupos.Modules.Transaction.Core.Entity;

namespace Zolupos.Modules.Transaction.Core.Map
{
    public class TransactionProfile : Profile
    {
        public TransactionProfile()
        {
            CreateMap<UserTransaction, TransactionRes>()
                .ForMember(s => s.OrderedProducts, c => c.MapFrom(m => m.OrderedProducts));
            CreateMap<OrderedProduct, AllOrderedProductDTO>();
        }
    }
}
