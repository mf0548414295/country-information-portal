using MongoDB.Driver;
using repository.Models;
namespace repository.Services
{
    public class CountryService
    {
        private readonly IMongoCollection<CountryModel> _countries;
        public CountryService(IMongoCollection<CountryModel> countries)
        {
            _countries = countries;
        }
        public List<CountryModel> GetCountries()
        {
            return _countries.Find(_=>true).ToList();
        }
        public void UpdateCountry(CountryModel country,string countryId)
        {
            _countries.ReplaceOne(country=>country.Id==countryId,country);
        }

    }
}
