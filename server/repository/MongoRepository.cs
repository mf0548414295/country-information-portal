using MongoDB.Driver;
using repository.Models;
using repository.Services;

namespace repository
{
    public class MongoRepository
    {
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<CountryModel> _countries;
        public CountryService CountryService { get; set; }
        public MongoRepository(IDatabaseSettings databaseSettings)
        {
            var client = new MongoClient(databaseSettings.ConnectionString);
            _database = client.GetDatabase(databaseSettings.DatabaseName);
            _countries = _database.GetCollection<CountryModel>(databaseSettings.CollectionsNames.Countries);
            CountryService = new CountryService(_countries);
        }
    }
}