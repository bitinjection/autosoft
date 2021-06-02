using NUnit.Framework;
using System;
using AutosoftTaxCalculator.Models;
using System.Collections.Generic;

namespace AutosoftTaxCalculator.Tests
{
    [TestFixture]
    public class ProgressiveTaxPolicyTests
    {
        private List<Rule> brackets = new List<Rule>
        {
            new Rule { Breakpoint = decimal.MaxValue,  Amount = 0.37M, IsPercent = true },
            new Rule { Breakpoint = 523600, Amount = 0.35M, IsPercent = true },
            new Rule { Breakpoint = 209425, Amount =  0.24M, IsPercent = true },
            new Rule { Breakpoint = 164925, Amount = 0.22M, IsPercent = true },
            new Rule { Breakpoint = 86375, Amount = 0.12M, IsPercent = true },
            new Rule { Breakpoint = 40000, Amount = 6000M, IsPercent = false },
        };

        private static decimal epsilon = 0.005M;

        [TestCase(533600, 153187.25, "Progressivee")]
        [TestCase(523600, 149487.25, "Progressive")]
        [TestCase(219425, 43026, "Progressive")]
        [TestCase(209425, 39526, "Progressive")]
        [TestCase(174925, 31246, "Progressive")]
        [TestCase(164925, 28846, "Progressive")]
        [TestCase(96375, 13765, "Progressive")]
        [TestCase(86375, 11565, "Progressive")]
        [TestCase(50000, 7200, "Progressive")]
        [TestCase(40000, 6000, "Flat")]
        [TestCase(30000, 6000, "Flat")]
        public void CalculateAnnualProgressive_whenGivenIncomes_isTaxedAppropriately(decimal income, decimal expected, string plan)
        {
            var policy = new ProgressiveTaxPolicy();
            decimal calculated = policy.CalculateAnnual(income).Tax;

            Assert.IsTrue(
                Math.Abs(calculated - expected) < epsilon,
                $"Calculated {calculated.ToString()}, but expected ${expected} for income {income}");
        }
    }
}