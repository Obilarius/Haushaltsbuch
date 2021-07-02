import React, { useEffect } from "react";

const LoadBankStatement = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/lib/pdf.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const fileOnChangeHandler = (event) => {
    const file = event.target.files[0];
    const year = file.name.split("_")[1];

    var fileReader = new FileReader();

    fileReader.onload = (e) => {
      pdfjsLib.getDocument(new Uint8Array(this.result)).promise.then((pdf) => {
        const pages = pdf.numPages;
      });
    };

    fileReader.readAsArrayBuffer(file);
  };

  return (
    <div className="App">
      <input type="file" name="pdfupload" id="pdfupload" onChange={fileOnChangeHandler} />
      {/* <button id="btnReadFile" onClick="readFile()">Read File</button> */}
      <div id="payments"></div>
    </div>
  );
};

export default LoadBankStatement;
