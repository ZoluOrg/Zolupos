using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Shared.Infrustructure.Services
{
    public static class FilesService
    {
        public async static Task<string> UploadFile(string PathFromStaticRoot, IFormFile File)
        {
            var filePath = Path.Combine(Environment.CurrentDirectory, "Zolupos.Static", File.Name);
            if (File.Length > 0)
            {
                using var stream = new FileStream(filePath, FileMode.Create);
                await File.CopyToAsync(stream);
            }
            return filePath;
        }
    }
}
