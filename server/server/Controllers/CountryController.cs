
using Microsoft.AspNetCore.Mvc;
using repository;
using repository.Models;
namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountryController : ControllerBase
    {
        public readonly MongoRepository repository;
        public CountryController(MongoRepository repository)
        {
            this.repository = repository;
        }
        [HttpGet]
        public IActionResult GetCountries()
        {
            try
            {
                List<CountryModel> countries = repository.CountryService.GetCountries();
                Logger.Info("countries sent to client");
                return Ok(countries);
            }
            catch (Exception ex)
            {
                Logger.Error("An error occurred: "+ex);
                return BadRequest(ex.Message);
            }
        }
        [HttpPut]
        public ActionResult<CountryModel> UpdateCountry(CountryModel country,string countryId)
        {
            try
            {
                repository.CountryService.UpdateCountry(country, countryId);
                Logger.Info("client update country: "+ countryId);
                return Ok(country);
            }
            catch (Exception ex)
            {
                Logger.Error("An error occurred: " + ex);
                return BadRequest(ex.Message);
            }
        }
    }
}
