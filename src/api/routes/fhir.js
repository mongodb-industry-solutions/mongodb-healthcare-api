const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../../db/mongodb-connection");

function connectToMongoDB() {
  return connectToDatabase();
}

router.get("/api/:resource", async (req, res) => {
  const resource = req.params.resource;
  const query = req.query;

  //console.log("Host URL: ", req.originalUrl);
  //console.log("Origin: ", req.headers.host);
  //console.log(req.params);
  //console.log(req.params.resource);
  console.log(req.query);

  try {
    const db = await connectToMongoDB();
    const resourceName = resource.toLowerCase();
    const collection = db.collection(resourceName);

    const resourceQuery = {};
    for (const key in query) {
      resourceQuery[`resource.${key}`] = query[key];
    }

    const results = await collection.find(resourceQuery).toArray();

    if (results.length !== 0) {
      return res.status(200).json(results);
    } else {
      return res.status(404).json({ error: "Resource not found" });
    }
  } catch (error) {
    console.error("Error in handling request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/api/metadata/:resource", async (req, res) => {
  const resource = req.params.resource;
  const query = req.query;

  //console.log("Host URL: ", req.originalUrl);
  console.log(req.query);

  try {
    const db = await connectToMongoDB();
    const resourceName = resource.toLowerCase();
    const collection = db.collection(resourceName);

    const metadataQuery = {};
    for (const key in query) {
      metadataQuery[`metadata.${key}`] = query[key];
    }

    const results = await collection.find(metadataQuery).toArray();

    if (results.length !== 0) {
      return res.status(200).json(results);
    } else {
      return res.status(404).json({ error: "Resource not found" });
    }
  } catch (error) {
    console.error("Error in handling request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
