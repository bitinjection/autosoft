namespace AutosoftTaxCalculator.Models {
    public interface ITaxPolicyFactory {
        ITaxPolicy Create(string state);
    }
}