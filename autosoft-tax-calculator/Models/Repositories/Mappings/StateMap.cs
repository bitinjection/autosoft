using FluentNHibernate.Mapping;

// At the time of writing, a State enum existed which would take precendence over the NHibernate State class
using StateEntity = AutosoftTaxCalculator.Models.Repositories.Entities.State;

namespace AutosoftTaxCalculator.Models.Repositories.Mappings
{
  public class StateMap : ClassMap<StateEntity>
  {
    public StateMap()
    {
      Id(x => x.Id);
      Map(x => x.Name).Index("ix_state_name");
      References(x => x.Policy);
    }
  }
}