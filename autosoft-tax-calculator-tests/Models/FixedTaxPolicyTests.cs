using NUnit.Framework;
using System;
using AutosoftTaxCalculator.Models;

namespace AutosoftTaxCalculator.Tests
{
    [TestFixture]
    public class FixedTaxPolicyTests
    {
        private FixedTaxPolicy policy;

        [SetUp]
        public void Setup()
        {
            this.policy = new FixedTaxPolicy();
        }

        [TestCase(40000)]
        [TestCase(100000)]
        [TestCase(500000)]
        [TestCase(9999999)]
        public void CalculateAnnualTax_whenGivenAnyValue_returnsFlatTax(decimal income)
        {
            decimal expected = 6000M;
            decimal calculated = policy.CalculateAnnual(income).Tax;

            Assert.IsTrue(Math.Abs(calculated - expected) < 0.0005M);
        }
    }
}