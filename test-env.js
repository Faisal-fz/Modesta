require("dotenv").config();
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "Found" : "Missing");
console.log("Preview:", process.env.DATABASE_URL?.substring(0, 30));
