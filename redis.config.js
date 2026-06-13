const Redis = require("ioredis");
const redis = new Redis();//hishel
redis.on("connect", () => {
  console.log("redis connected");
});
redis.on("error", (err) => {
  console.log("redis error", err);
});
module.exports = redis;
