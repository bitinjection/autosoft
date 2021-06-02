namespace AutosoftTaxCalculator.Models
{
  public interface ITaxPolicy
  {
    TaxResult CalculateAnnual(decimal income);
  }
}