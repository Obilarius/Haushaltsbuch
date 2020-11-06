class Zahlung {
  Datum;
  Zahlungsart;
  Saldo;
  Saldoart;
  Verwendungszweck = [];
  Kategorie;

  verwendungszweckAsString() {
    return this.Verwendungszweck.join("<br>");
  }

  createHash() {}
}
