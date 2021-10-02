const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const collectionsRouter = require("./routes/collections");
const exhibitionsRouter = require("./routes/exhibitions");
const path = require("path");

const app = express();
const rootFolder = process.env.ROOT_FOLDER_PATH
const build_folder_uri = path.join(rootFolder, "Front_build",)
const static_folder_url = path.join(rootFolder, "Front_build",'static')
const MONGO_URI = `${process.env.MONGO_URI_L}@${process.env.MONGO_URI_R}`
console.log(build_folder_uri)
const  corsConfig = {
  origin:"http://localhost:3000"
}
console.log(MONGO_URI)
app.use(express.json())
app.use(cors(corsConfig))
app.use('/static',express.static(static_folder_url));
app.use("/api/collections", collectionsRouter);
app.use("/api/exhibitions", exhibitionsRouter);
app.get("/*", (req, res, next) => {
  res.sendFile(path.join(build_folder_uri, "index.html"));
});

const start = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to db");
  } catch (error) {
    console.log("db error",error.message,error);
    process.exit(1);
  }
};

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});

start();
