using FluentNHibernate.Mapping;
using AutosoftTaxCalculator.Models.Repositories.Entities;

namespace AutosoftTaxCalculator.Models.Repositories.Mappings
{
  public class PolicyMap : ClassMap<Policy>
  {
    public PolicyMap()
    {
      Id(x => x.Id);
      Map(x => x.Name);
    }
  }
}