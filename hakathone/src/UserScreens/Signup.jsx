import { useState } from "react";
import Buttons from "../Component/Buttons";
import { fbSignUp } from "../Router/Fbmethods";
import Input from "../Component/Input";
import Select from "../Component/Select";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [model, setModel] = useState({});

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();

  let signUpUser = () => {
    console.log(model);
    fbSignUp(model)
      .then((res) => {
        navigate("/login");

        if (model.role === "Donor") {
          navigate("/Donor");
        } else if (model.role === "Acceptor") {
          navigate("/Acceptor");
        } else {
          console.log("Invalid role selection");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let go = () => {
    navigate("/Login");
  };

  return (
    <div className="container-fluid gbcolor">
      <div className="container">
        <h1 className="pt-3 bg-transparent fs-2">
          <b className="text-white ">SignUp Your Account</b>
        </h1>
        <hr className="w-25 text-center custom-hr" />
      </div>
      <div className="container-fluid m-auto py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                width={500}
                src="https://static.vecteezy.com/system/resources/previews/024/658/980/original/3d-male-character-sitting-on-a-sofa-and-working-on-a-laptop-with-thinking-pose-free-png.png"
                className="img-fluid"
                alt="Responsive image"
              />
            </div>
            <div className="col-md-6 m-auto border rounded p-2 shadow ">
              <h1 className="login fs-3">SignUp</h1>

              <div className="text-white">
                <Input
                  onChange={(e) => fillModel("Name", e.target.value)}
                  label="Name"
                  type="text"
                />
              </div>

              <div className="text-white">
                <Input
                  value={model.Email}
                  onChange={(e) => fillModel("email", e.target.value)}
                  label="Email"
                  type="email"
                />
              </div>
              <div className="text-white">
                <Input
                  type="password"
                  value={model.password}
                  onChange={(e) => fillModel("password", e.target.value)}
                  label="Password"
                />
              </div>
              <div>
                <Select
                  getValue={(e) => fillModel("role", e)} 
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

              <Buttons onClick={signUpUser} label="Signup" />
              <p className="p-3" onClick={go}>
                if you have already an account got to the
                <u>
                  <b className="text-white fs-5 p-2">Login</b>
                </u>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
