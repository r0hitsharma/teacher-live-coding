import express from 'express';
const router = express.Router();
import db from "../database.js";

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const contacts = await db("contacts").select("*");
    response.json(contacts);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    const contact = request.body;

    if(!contact)
      return response.status(400);

    console.log(contact);
    // This could be insecure!!
    await db("contacts").insert(contact);
    response.status(201).json(contact);
  } catch (error) {
    console.error(error);
    response.status(500).send(error.message);
  }
});

export default router;
