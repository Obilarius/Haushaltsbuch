import React, { useState } from "react";
import pdf from "pdf-parse";

const LoadBankStatement = () => {
  const [selectedFile, setSelectedFile] = useState("");

  const readFileDataAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        resolve(event.target.result);
      };

      reader.onerror = (err) => {
        reject(err);
      };

      reader.readAsDataURL(file);
    });
  };

  const onFileChange = (file) => {
    setSelectedFile(file);
    console.log(file);

    readFileDataAsBase64(file).then((e) => {
      console.log(e);
    });
  };

  return (
    <div className="App">
      {/* <input type="file" name="pdfupload" id="pdfupload" /> */}
      <input
        type="file"
        // value={selectedFile}
        onChange={(e) => {
          onFileChange(e.target.files[0]);
        }}
      />
      <div id="payments"></div>
    </div>
  );
};

export default LoadBankStatement;
