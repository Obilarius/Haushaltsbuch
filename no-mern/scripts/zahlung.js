class Zahlung {
  Hash;
  Datum;
  Zahlungsart;
  Saldo;
  Saldoart;
  Verwendungszweck = [];
  Kategorie;
  Partner;

  build() {
    this.Partner = this.Verwendungszweck[0] || "";
    this.Verwendungszweck.shift();
    this.Verwendungszweck = this.Verwendungszweck.join("");
    this.Hash = this.createHash();
  }

  createHash() {
    const base =
      this.Datum +
      this.Zahlungsart +
      this.Saldo +
      this.Saldoart +
      this.Verwendungszweck.join("") +
      this.Partner;
    let hash = 0;
    let chr;

    for (i = 0; i < base.length; i++) {
      chr = base.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    console.log(hash);
    return hash;
  }
}
