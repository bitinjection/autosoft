namespace AutosoftTaxCalculator.Models.Repositories.Entities
{
  public class State
  {
    public virtual int Id { get; protected set; }
    public virtual string Name { get; set; }
    public virtual Policy Policy { get; set; }
  }
}