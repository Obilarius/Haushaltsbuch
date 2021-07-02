const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;
  const errors = [];

  if (errors.length > 0) {
    res.status(409).send(errors);
  } else {
    res.status(201).send(data);
  }
});

router.get("/:data", (req, res) => {
  const data = req.params.data;
  const errors = [];

  res.send(data);
});

module.exports = router;
