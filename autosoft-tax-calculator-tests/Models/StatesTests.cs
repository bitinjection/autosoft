using NUnit.Framework;
using System;
using AutosoftTaxCalculator.Models;

namespace AutosoftTaxCalculator.Tests
{
    [TestFixture]
    public class StatesTests
    {
        [Test]
        public void CreateState_WithValidString_ReturnsCorrectEnum()
        {
            string name = "Texas";
            Assert.DoesNotThrow(() => StateFactory.createState(name));
        }

        [Test]
        public void CreateState_WithStringWithSpaces_ReturnsCorrectEnum()
        {
            string name = "New York";
            Assert.DoesNotThrow(() => StateFactory.createState(name));
        }

        [Test]
        public void CreateState_WithInvalidString_ThrowsException()
        {
            string name = "Tejas";
            Assert.Throws<ArgumentException>(() => StateFactory.createState(name));
        }
    }
}