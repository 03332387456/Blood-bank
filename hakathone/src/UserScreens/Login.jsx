import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbLogin } from "../Router/Fbmethods";
import Buttons from "../Component/Buttons";
import Input from "../Component/Input";
import Select from "../Component/Select";

export default function Login() {
  const [model, setModel] = useState({});
  const navigate = useNavigate();

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };

  let LoginUser = () => {
    console.log(model);
    fbLogin(model)
      .then((res) => {
        console.log(res);

        
        if (model.role === "Donor") {
          navigate("/Donate");
        } else if (model.role === "Acceptor") {
          navigate("/Acceptor"); 
          console.log("Invalid role selection");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid gbcolor">
      <div className="container">
        <h1 className="pt-5 bg-transparent fs-2">
          <b className="text-white">Login Your Account</b>
        </h1>
        <hr className="w-25 mb-5 text-center custom-hr" />
      </div>
      <div className="container-fluid m-auto py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                width={450}
                src="https://static.vecteezy.com/system/resources/previews/023/377/386/original/3d-male-character-happy-working-on-a-laptop-png.png"
                className="img-fluid"
                alt="Responsive image"
              />
            </div>
            <div className="col-md-6 m-auto border rounded p-2 shadow">
              <h1 className="login fs-3">Login</h1>

              <div>
                <Input
                  value={model.Email}
                  onChange={(e) => fillModel("email", e.target.value)}
                  label="Email"
                  type="email"
                />
              </div>
              <div>
                <Input
                  value={model.password}
                  onChange={(e) => fillModel("password", e.target.value)}
                  label="Password"
                  type="password"
                />
              </div>
              <div>
                <Select
                  getValue={(e) => fillModel("role", e)} 
                  label="Select Your role"
                  options={[
                    {
                      value: "Donor",
                      displayName: "Donor",
                    },
                    {
                      value: "Acceptor",
                      displayName: "Acceptor",
                    },
                  ]}
                />
              </div>

              <Buttons onClick={LoginUser} label="LOGIN" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
