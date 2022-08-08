﻿using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.DTO;
using Zolupos.Application.Common.Interfaces;
using Microsoft.EntityFrameworkCore;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Transactions
{
    public record FetchTransactionsPaginatedQuery(int page, int length, string sortby) : IRequest<Pagination<ICollection<TransactionDTO>>>;
    public class FetchTransactionPaginatedHandler : IRequestHandler<FetchTransactionsPaginatedQuery, Pagination<ICollection<TransactionDTO>>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;

        public FetchTransactionPaginatedHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public async Task<Pagination<ICollection<TransactionDTO>>> Handle(FetchTransactionsPaginatedQuery request, CancellationToken cancellationToken)
        {
            var pagingValidator = new PaginationFilter(request.length, request.page);
            var transactions = (from tr in _context.Transactions
                                select tr);

            switch (request.sortby)
            {
                case "by_id":
                    transactions = transactions.OrderBy(tr => tr.TransactionId);
                    break;
                case "by_date":
                    transactions = transactions.OrderBy(tr => tr.TransactedAt);
                    break;
                case "by_id_dsc":
                    transactions = transactions.OrderByDescending(tr => tr.TransactionId);
                    break;
                case "by_date_dsc":
                    transactions = transactions.OrderByDescending(tr => tr.TransactedAt);
                    break;
            }

            var totalItems = await (from tr in _context.Transactions
                                    select tr).CountAsync();

            var mappedResult = _mapper.Map<ICollection<TransactionDTO>>(await transactions.AsNoTracking()
                .Include(tr => tr.Payments).Include(tr => tr.OrderedProducts).Skip((pagingValidator.CurrentPage - 1) * pagingValidator.PageSize)
                .Take(request.length).ToListAsync(cancellationToken));
            
            var response = new Pagination<ICollection<TransactionDTO>>(mappedResult, pagingValidator.PageSize, pagingValidator.CurrentPage, totalItems);
            return response;
        }
    }
}
