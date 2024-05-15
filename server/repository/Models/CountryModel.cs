
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace repository.Models
{
    [BsonIgnoreExtraElements]
    public class CountryModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("name")]
        public NameModel Name { get; set; }
        [BsonElement("capital")]
        public string[] Capital { get; set; }
        [BsonElement("region")]
        public string Region { get; set; }
        [BsonElement("subregion")]
        public string SubRegion { get; set; }
        [BsonElement("population")]
        public int Population { get; set; }
        [BsonElement("flags")]
        public FlagModel Flags { get; set; }

    }
}
