using System.Collections.Generic;
using System.Linq;
using System;

namespace AutosoftTaxCalculator.Models
{
  public class Rule
  {
    public bool IsPercent;
    public decimal Amount;
    public decimal Breakpoint;
  }

  public class ProgressiveTaxPolicy : ITaxPolicy
  {
    // TODO: Move to DB
    private List<Rule> brackets = new List<Rule>
    {
      new Rule { Breakpoint = decimal.MaxValue,  Amount = 0.37M, IsPercent = true },
      new Rule { Breakpoint = 523600M, Amount = 0.35M, IsPercent = true },
      new Rule { Breakpoint = 209425M, Amount =  0.24M, IsPercent = true },
      new Rule { Breakpoint = 164925M, Amount = 0.22M, IsPercent = true },
      new Rule { Breakpoint = 86375M, Amount = 0.12M, IsPercent = true },
      new Rule { Breakpoint = 40000M, Amount = 6000M, IsPercent = false },
    };

    public TaxResult CalculateAnnual(decimal income) {
      decimal tax = PerformCalculation(income, 0);
      string plan = income <= brackets.LastOrDefault().Breakpoint ? "Flat" : "Progressive";

      var result = new TaxResult { Tax = tax, Plan = plan };

      return result;
    }

    private decimal calculateSimpleTax(decimal income, Rule rule) => (rule.IsPercent) ?  income * rule.Amount : rule.Amount;

    private decimal PerformCalculation(decimal income, int i)
    {
      if (i == brackets.Count - 1)
      {
        return calculateSimpleTax(income, brackets[i]);
      }
      else if (income > brackets[i + 1].Breakpoint)
      {
        return recursivelyApplyBrackets(income, i);
      }
      else
      {
        // Skip this step since we're not yet in an applicable income bracket
        return PerformCalculation(income, i + 1);
      }
    }

    private decimal recursivelyApplyBrackets(decimal income, int i)
    {
      var currentBracket = brackets[i];
      var nextBracket = brackets[i + 1];

      var amountToTax = income - nextBracket.Breakpoint;
      var remainingUntaxedIncome = income - amountToTax;

      var nextBracketIndex = i + 1;

      return calculateSimpleTax(amountToTax, currentBracket) + PerformCalculation(remainingUntaxedIncome, nextBracketIndex);
    }
  }
}