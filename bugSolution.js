```javascript
//Correct usage of $elemMatch to query subfields within array of objects
db.collection.find({ "field": { $elemMatch: { "subfield": { $in: ["value1", "value2"] } } } }) 
```