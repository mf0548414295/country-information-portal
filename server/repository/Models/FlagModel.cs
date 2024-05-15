
using MongoDB.Bson.Serialization.Attributes;

namespace repository.Models
{
    [BsonIgnoreExtraElements]
    public class FlagModel
    {
        [BsonElement("png")]
        public string? Png{ get; set; }
        [BsonElement("svg")]
        public string? Svg { get; set; }
        [BsonElement("alt")]
        public string? Alt { get; set; }
    }
}
