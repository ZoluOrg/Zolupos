using Zolupos.Application.Common.Enums;

namespace Zolupos.Application.Common.DTO
{
    public class PaymentDTO
    {
		public int PaymentType { get; set; }
        public float Tendered { get; set; }
        public float Change { get; set; }
        public float Amount { get; set; }
    }
}