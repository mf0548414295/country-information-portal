
using MongoDB.Bson.Serialization.Attributes;

namespace repository.Models
{
    [BsonIgnoreExtraElements]
    public class NameModel
    {
        [BsonElement("common")]
        public string Common{ get; set; }
    }
}
