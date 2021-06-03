using System.Collections.Generic;
using System.Linq;
using NHibernate;

namespace AutosoftTaxCalculator.Models
{
  public class FixedTaxPolicy : ITaxPolicy
  {
    public TaxResult CalculateAnnual(decimal income)
    {
      // TODO: Pull this from the DB instead
      var result = new TaxResult { Tax = 6000M, Plan = "Fixed" };

      return result;
    }
  }
}