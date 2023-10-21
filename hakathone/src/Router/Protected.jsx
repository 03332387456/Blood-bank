import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbAuth } from "./Fbmethods";

export default function Protected(props) {
  const { UserScreens } = props;

  const [loader, setloader] = useState(true);

  const navigate = useNavigate();

  let checkAuth = () => {
    setloader(true);

    fbAuth()
      .then((res) => {
        setloader(false);
      })
      .catch((err) => {
        setloader(false);
        navigate("/Signup");
      });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return loader ? (
    <>
      <img
        width={400}
        src="https://i.gifer.com/ZKZg.gif"
        className="img-fluid"
        alt="Responsive image"
      />
    </>
  ) : (
    <UserScreens />
  );
}
