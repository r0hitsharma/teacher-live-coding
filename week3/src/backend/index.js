import express from 'express';
const app = express();
const router = express.Router();

import contactsRouter from "./api/contacts.js";

const port = process.env.PORT;

// Parse URL-encoded bodies (as sent by HTML forms)
// app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.static('./src/frontend'))

router.use("/contacts", contactsRouter);

app.use("/api", router);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
