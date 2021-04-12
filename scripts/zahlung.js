class Zahlung {
  Datum;
  Zahlungsart;
  Saldo;
  Saldoart;
  Verwendungszweck = [];
  Kategorie;

  verwendungszweckAsString() {
    const tmp = this.Verwendungszweck;
    tmp.shift();
    return tmp.join("<br>");
  }

  Partner() {
    return this.Verwendungszweck[0];
  }

  createHash() {}
}
