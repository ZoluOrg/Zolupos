using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.Annotation;
using Zolupos.Modules.Inventory.Core.DTO;
using Zolupos.Modules.Inventory.Core.Entity;
using Zolupos.Modules.Inventory.Core.Model;

namespace Zolupos.Modules.Inventory.Core.Map
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<Product, GetProductResponse>().ReverseMap();
            CreateMap<ProductBase, Product>().ReverseMap();
            CreateMap<AddProductRequest, Product>().ReverseMap();
            CreateMap<EditProductRequest, Product>().ReverseMap();
        }
    }
}
