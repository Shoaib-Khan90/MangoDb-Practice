const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

async function main() {
  await client.connect();

  console.log("MongoDB Connected!");

  const db = client.db("delta_app");
  const users = db.collection("users");

  const result = await users.insertOne({
    name: "Shoaib",
    age: 22,
    email: "shoaib@gmail.com"
  });

  console.log(result);

  await client.close();
}

main();