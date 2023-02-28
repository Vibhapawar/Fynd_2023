const mongodb =require ("mongodb");
// require("dotenv").config();
const url = "mongodb://localhost:27017";
const client = new mongodb.MongoClient(url);

/**
 * connecting to mongodb and running find queries on socialApp db
 */
async function run() {
    try{
        //connecting to client: sending connection request
        await client.connect(); // wait here untill session opens
        //selecting the users collection
        const UseCollection = client.db("socialApp").collection("users");
        // finding the users collections
        const cursor = UserCollection.find({});
        // iterating over the cursor.
        ///console.log(cursor);
        await cursor.forEach((docs) => {
            console.log(docs);
        });

        


    }
    catch (e) {
        console.error(e);
      } finally {
        await client.close();//wait
      }
}