const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://phoenixadmin:phoenixadmin@cluster0.0l89qoo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });

    console.log("✅ Connected to MongoDB Atlas Successfully");
  } catch (err) {
    console.log("❌ Connection Failed");
    console.log(err);
  } finally {
    await client.close();
  }
}

run();