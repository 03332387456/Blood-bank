import React from "react";
import { useNavigate } from "react-router-dom";

function Donate() {
  const donate = () => {
    navigate("/Donor");
  };
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center py-5 my-5  ">
        <b>
          <u>Donate Your Blood</u>
        </b>
      </h1>
      <p className="text-center m-2">
        if You want to Donate Your blood Click here
        <button onClick={donate} className="btn btn-dark text-white m-2">
          Donate{" "}
        </button>
      </p>
    </>
  );
}

export default Donate;
