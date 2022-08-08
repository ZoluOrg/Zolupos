﻿using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Zolupos.Application.Common.DTO;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using System.Linq;

namespace Zolupos.Application.Features.Transactions
{
    public record SearchTransactionQuery(int page, int length, string query) : IRequest<Pagination<ICollection<TransactionDTO>>>;
    public class SearchTransactionQueryHandler : IRequestHandler<SearchTransactionQuery, Pagination<ICollection<TransactionDTO>>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;

        public SearchTransactionQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Pagination<ICollection<TransactionDTO>>> Handle(SearchTransactionQuery request, CancellationToken cancellationToken)
        {
            var pagingValidator = new PaginationFilter(request.length, request.page);
            var transactions = await (from tr in _context.Transactions
                                      where tr.TransactionId.ToString().ToLower().Contains(request.query) || tr.Reference.ToString().ToLower().Contains(request.query)
                                      orderby tr.TransactionId descending
                                      select tr)
                                .Include(tr => tr.OrderedProducts)
                                .Include(tr => tr.Payments)
                                .Skip((pagingValidator.CurrentPage - 1) * pagingValidator.PageSize)
                                .Take(pagingValidator.PageSize)
                                .ToListAsync();
            var totalItems = await (from tr in _context.Transactions
                                    where tr.TransactionId.ToString().ToLower().Contains(request.query) || tr.Reference.ToString().ToLower().Contains(request.query)
                                    select tr).CountAsync();

            var mappedResult = _mapper.Map<ICollection<TransactionDTO>>(transactions);
            return new Pagination<ICollection<TransactionDTO>>(mappedResult, pagingValidator.PageSize, pagingValidator.CurrentPage, totalItems);
        }
    }
}
