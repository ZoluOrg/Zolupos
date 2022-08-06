using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Application.Common.Wrapper
{
    public class Pagination<T>
    {
        public int PageSize { get; set; }
        public int CurrentPage { get; set; }
        public int TotalPages { get; set; }
        public int TotalItems { get; set; }
        public T Data { get; set; }
        public Pagination(T data, int pageSize, int currentPage, int totalItems)
        {
            Data = data;
            PageSize = pageSize;
            CurrentPage = currentPage;
            TotalItems = totalItems;
            TotalPages = (int)Math.Ceiling((decimal)totalItems / (decimal)pageSize);
        }
    }

    public class PaginationFilter
    {
        public int PageSize { get; set; }
        public int CurrentPage { get; set; }

        public PaginationFilter()
        {
            CurrentPage = 1;
            PageSize = 10;
        }

        public PaginationFilter(int pageSize, int currentPage)
        {
            PageSize = pageSize < 10 ? 10 : pageSize;
            CurrentPage = currentPage < 1 ? 1 : currentPage;
        }
    }
}
