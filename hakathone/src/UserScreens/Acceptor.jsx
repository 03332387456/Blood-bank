import React from "react";
import DonorData from "./DonorData";
import { useState } from "react";

function Acceptor() {
  const [donorData, setDonorData] = useState([]);

  return (
    <div>
      Acceptor
      <DonorData donorData={donorData} />
    </div>
  );
}

export default Acceptor;
