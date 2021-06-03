using System;
using AutosoftTaxCalculator.Models;
using NHibernate;
using AutosoftTaxCalculator.Models.Repositories.Entities;

namespace AutosoftTaxCalculator.Models {
  public class TaxPolicyFactory : ITaxPolicyFactory
  {
    private ISessionFactory sessionFactory;
    public TaxPolicyFactory(ISessionFactory sessionFactory) {
      this.sessionFactory = sessionFactory;
    }

    public ITaxPolicy Create(string state)
    {
      using (var session = sessionFactory.OpenSession())
      {
        Policy policy = getPolicyNameFromSession(session, state);

        if (policy.Name == "Fixed")
        {
          return new FixedTaxPolicy();
        }
        else if (policy.Name == "Progressive")
        {
          return new ProgressiveTaxPolicy();
        }
        else
        {
          throw new PolicyNotFoundException($"Could not find tax policy associated with the policy name '{policy}'");
        }
      }
    }

    public Policy getPolicyNameFromSession(ISession session, string state)
    {
        var result = session
          .QueryOver<AutosoftTaxCalculator.Models.Repositories.Entities.State>()
          .Where(s => s.Name == state)
          .List();
        var policy = result[0].Policy;

        return policy;
    }
  }

  public class PolicyNotFoundException : Exception
  {
    public PolicyNotFoundException() { }
    public PolicyNotFoundException(string message) : base(message) { }
    public PolicyNotFoundException(string message, Exception inner) : base(message, inner) { }
  }
}