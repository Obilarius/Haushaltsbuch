class Zahlung {
  Datum;
  Zahlungsart;
  Saldo;
  Saldoart;
  Verwendungszweck = [];
  Kategorie;
  Partner;

  build() {
    this.Partner = this.Verwendungszweck[0];
    this.Verwendungszweck.shift();
    this.Verwendungszweck = this.Verwendungszweck.join("");
  }

  createHash() {}
}
