using Microsoft.AspNetCore.Mvc;
using TensoDertBack.Interfaces;

namespace TensoDertBack.API.Infrastructure
{
  public class ResponsePreparer : IResponsePreparer
  {
    public IActionResult Success(string message = "", object content = null)
    {
      throw new System.NotImplementedException();
    }

    public IActionResult NotFound(string message = "", object content = null)
    {
      throw new System.NotImplementedException();
    }

    public object ResponseContentWrapper(object content)
    {
      throw new System.NotImplementedException();
    }
  }
}