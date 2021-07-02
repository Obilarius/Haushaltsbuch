const express = require("express");
const router = express.Router();
const Zahlung = require("../schema/zahlung");

router.post("/upload", async (req, res) => {
  const data = req.body;
  const errors = [];

  data.forEach((el) => {
    const zahlung = new Zahlung({
      hash: el.Hash,
      datum: el.Datum,
      zahlungsart: el.Zahlungsart,
      saldo: el.Saldo,
      saldoart: el.Saldoart,
      verwendungszweck: el.Verwendungszweck,
      partner: el.Partner,
    });

    zahlung.save((err) => {
      if (err) errors.push({ err: err, data: el });
      // saved!
    });
  });

  res.status(201).send(errors);
});

router.get("/:data", (req, res) => {
  const data = req.params.data;
  const errors = [];

  res.send(data);
});

module.exports = router;
