using Microsoft.AspNetCore.Http;

namespace Zolupos.Shared.Core.Utilities;

public static class BodyUtilities
{
    /// <summary>
    /// Reads the body with the given HttpContext
    /// </summary>
    /// <param name="context">HttpContext of the controller</param>
    /// <returns></returns>
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