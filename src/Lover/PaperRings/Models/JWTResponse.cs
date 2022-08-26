using PaperRings.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PaperRings.Models
{
    public class JWTResponse
    {
        public string Token { get; set; }
        public DateTime ExpirationDate { get; set; }
        public Employee Employee { get; set; }
    }
}
