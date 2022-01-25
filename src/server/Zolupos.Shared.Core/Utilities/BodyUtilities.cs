using Microsoft.AspNetCore.Http;

namespace Zolupos.Shared.Core.Utilities;

public static class BodyUtilities
{
    public static async Task<string> GetBody(HttpContext context)
    {
        var body = "";
        using (var reader = new StreamReader(context.Request.Body))
        {
            body = await reader.ReadToEndAsync();
        }

        return body;
    }
}