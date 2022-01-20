const express = require("express");
const app = express();
const auth = require("./auth/verifyRecaptcha");
app.use(express.json({ extended: false }));

app.use("/auth", auth);
const PORT = 3001;
app.listen(PORT, () => console.log("started"));
