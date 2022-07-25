using Zolupos.Application.Common.Enums;

namespace Zolupos.Application.Common.DTO
{
    public class PaymentDTO
    {
		public int PaymentType { get; set; }
        public int Tendered { get; set; }
        public int Change { get; set; }
        public int Amount { get; set; }
    }
}