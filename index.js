const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
  try {
    await client.connect();

    console.log("MongoDB Connected Successfully!");

    const db = client.db("delta_app");
    const users = db.collection("users");

    const result = await users.insertOne({
      name: "Shoaib",
      age: 22,
      email: "shoaib@example.com"
    });

    console.log("User inserted:", result.insertedId);
  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    await client.close();
  }
}

main();