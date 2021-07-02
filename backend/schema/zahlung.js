const mongoose = require("mongoose");
const { Schema } = mongoose;

const zahlungSchema = new Schema(
  {
    hash: { type: Number, index: true, unique: true },
    datum: Date,
    zahlungsart: String,
    saldo: Number,
    saldoart: String,
    verwendungszweck: Array,
    kategorie: Array,
    partner: String,
  },
  { timestamps: true }
);

const Zahlung = mongoose.model("zahlung", zahlungSchema);
module.exports = Zahlung;
