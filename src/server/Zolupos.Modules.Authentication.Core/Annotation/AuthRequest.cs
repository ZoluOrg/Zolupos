using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Modules.Authentication.Core.Annotation
{
    public class AuthRequest
    {
        [Required]
        public string Pin { get; set; }
    }
}
