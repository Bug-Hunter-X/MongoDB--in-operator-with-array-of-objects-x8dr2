# MongoDB $in operator with array of objects
This example demonstrates a common error when using the `$in` operator with an array of objects in MongoDB queries.  The `$in` operator is designed to check if a field's value exists within a provided array of values. When used with an array of objects, the comparison is made against the entire object, not individual fields within the objects.

**Problem:**  The provided code attempts to find documents where the `field` contains either `{"subfield":"value1"}` or `{"subfield":"value2"}`. However, due to incorrect usage of the `$in` operator, the query will likely return an empty result set unless an object exactly matching either of these exists within the `field`.

**Solution:** To correctly query for documents where a subfield within the array matches specified values, use the `$elemMatch` operator.