using System;
using Microsoft.AspNetCore.Mvc;

namespace TensoDertBack.Interfaces
{
    public interface IResponsePreparer
    {
        IActionResult Success(string message = "", object content = null);

        IActionResult NotFound(string message = "", object content = null);

        object ResponseContentWrapper(object content);
    }
}
