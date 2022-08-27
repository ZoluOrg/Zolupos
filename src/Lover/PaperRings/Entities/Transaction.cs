namespace PaperRings.Entities
{
    public class Transaction
    {
        public int TransactionId { get; set; }
        public string Reference { get; set; }
        public DateTime TransactionDate { get; set; }

        //Foreign Key
        public int DeviceId { get; set; }
        public Device Device { get; set; }

        //Foreign key
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }

        public ICollection<OrderedProduct> OrderedProducts { get; set; }
    }
}