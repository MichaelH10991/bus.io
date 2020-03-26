import express from "express";
import {
  getSingleBus,
  getManyBusses,
  saveBusses,
  findPlaces,
  deleteStoredBus, 
  getRemoteBusses
} from "./controller.js";

const router = express.Router();

/**
 * Get single bus from external api
 */
router.get("/busses/:number", (req, res) => {
  console.log(`GET: /busses/${req.params.number}`);
  // getSingleRemoteBus(req, res)
});

/**
 * A get request to an external api with a body with an array of busses
 */
router.get("/busses", (req, res) => {
  console.log(`GET: /busses`);
  getRemoteBusses(req, res);

});

router.get("/saved/:number", (req, res) => {
  console.log(`GET: /saved/${req.params.number}`);
  getSingleBus(req, res)
})

router.get("/saved", (req, res) => {
  console.log(`GET: /saved`)
  getManyBusses(req, res);
})

/**
 * post to mongo with json body
 */
router.post("/busses", (req, res) => {
  console.log(`POST: /busses`);
  saveBusses(req, res);
});

router.get("/places", (req, res) => {
  console.log(`GET: /places`);
  res.json(data.get_busses_place);
});

router.delete("/saved/:id", (req, res) => {
  console.log(`DELETE: /saved/${req.params.id}`);
  deleteStoredBus(req, res);
});

router.get("/ping", (req, res) => {
  console.log(`GET: /ping`);
  res.json({ version: process.env.API_VERSION, api_status: process.env.ENV });
});

export default router;
