import React, { useState } from "react";
import Header from "./Header";
import Faucet from "./Faucet";
import Balance from "./Balance";
import Transfer from "./Transfer";




function App() {

  return (
    <div>

      <Header />
      <Faucet />
      <Balance />
      <Transfer />
      
    </div>
  );
}

export default App;
