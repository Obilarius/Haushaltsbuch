import React from "react";
import Navbar from "./components/navbar";
import Theme from "./theme";

function App() {
  return (
    <div className="App" style={{ color: Theme.color.textPrimary }}>
      <Navbar />
    </div>
  );
}

export default App;
