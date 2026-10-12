const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/delta_app");

  console.log("MongoDB Connected Successfully!");

  const user = new User({
    name: "Shoaib",
    age: 23,
    email: "shoaib@example.com",
  });

  await user.save();

  console.log("User Added Successfully!");

  await mongoose.disconnect();
}

main().catch((err) => {
  console.log("Error:", err.message);
  mongoose.disconnect().catch(console.error);
});