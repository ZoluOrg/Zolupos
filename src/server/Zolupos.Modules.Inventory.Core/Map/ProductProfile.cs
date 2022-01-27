using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.DTO;
using Zolupos.Modules.Inventory.Core.Entity;

namespace Zolupos.Modules.Inventory.Core.Map
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<Product, ProductDTO>();
        }
    }
}
