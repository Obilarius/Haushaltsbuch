const alleZahlungen = [];

const zahlungFertig = (zahlung) => {
  zahlung.build();
  alleZahlungen.push(zahlung);
  // if (!zahlung.Partner) console.log(zahlung);
};

document.getElementById("pdfupload").onchange = function (event) {
  var file = event.target.files[0];
  const year = file.name.split("_")[1];

  var fileReader = new FileReader();

  fileReader.onload = function () {
    pdfjsLib.getDocument(new Uint8Array(this.result)).promise.then((pdf) => {
      const pages = pdf.numPages;

      for (let i = 1; i <= pages; i++) {
        pdf.getPage(i).then((pdfPage) => {
          pdfPage.getTextContent().then((textContent) => {
            let zahlung = null;

            // Each Line
            textContent.items.forEach((line) => {
              //  NEW BLOCK
              const regDatum =
                /^[0-3]{1}[0-9]{1}\.[0-1]{1}[0-9]{1}\. [0-3]{1}[0-9]{1}\.[0-1]{1}[0-9]{1}\. /;
              if (regDatum.exec(line.str) !== null) {
                // Datum
                let mDatum = regDatum.exec(line.str);
                const tmpDate = mDatum[0].substr(0, 5).split(".")
                tmpDate.push(year)
                tmpDate.reverse()

                // Betrag
                const regBetrag = /\d*\.{0,1}(\d)+,\d{2} (S|H)$/;
                const mBetrag = regBetrag.exec(line.str);

                // Art der Zahlung
                const regZahlungsart = new RegExp(
                  "(?<=" + mDatum[0] + ").*(?=" + mBetrag[0] + ")"
                );
                const mZahlungsart = regZahlungsart.exec(line.str);


                if (zahlung != null) zahlungFertig(zahlung);
                zahlung = new Zahlung();
                zahlung.Datum = new Date(tmpDate.join("-"));
                zahlung.Saldo = parseFloat(mBetrag[0].substr(0, mBetrag[0].length - 2).replace(".", "").replace(",","."))
                zahlung.Saldoart = mBetrag[0].substr(mBetrag[0].length - 1);
                zahlung.Zahlungsart = mZahlungsart[0].trim();
              } else if (zahlung != null) {
                const reg = /Übertrag auf Blatt |neuer Kontostand vom /;

                if (reg.exec(line.str)) {
                  zahlungFertig(zahlung);
                  zahlung = null;
                } else {
                  zahlung.Verwendungszweck.push(line.str.trim());
                }
              }
            });
          });
        });
      }
    });

    console.log(alleZahlungen)
  };

  //Step 3:Read the file as ArrayBuffer
  fileReader.readAsArrayBuffer(file);
};
