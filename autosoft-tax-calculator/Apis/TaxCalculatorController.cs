using Microsoft.AspNetCore.Mvc;
using AutosoftTaxCalculator.Models;

namespace AutosoftTaxCalculator.Apis
{

  [Route("api/taxcalculator")]
  public class TaxCalculator : Controller
  {
    [HttpGet("income/{income}/state/{state}")]
    public ActionResult<TaxResult> CalcuateTax([FromServices]ITaxPolicyFactory policyFactory, decimal income, string state)
    {
      ITaxPolicy policy = policyFactory.Create(state);
      var result = Ok(policy.CalculateAnnual(income));
      return result;
      // return new { State = state, Income = income };
    }
  }
}