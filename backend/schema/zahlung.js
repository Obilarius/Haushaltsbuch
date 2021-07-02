import mongoose from "mongoose";
const { Schema } = mongoose;

const zahlungSchema = new Schema({
  hash: String,
  datum: Date,
  zahlungsart: String,
  saldo: Number,
  saldoart: String,
  verwendungszweck: Array,
  kategorie: Array,
  partner: String,
});

const Zahlung = mongoose.model("Zahlung", zahlungSchema);
export default Zahlung;
