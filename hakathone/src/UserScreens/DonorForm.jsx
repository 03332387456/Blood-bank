import React, { useState } from "react";
import Buttons from "../Component/Buttons";
import { fbLogin} from "../Router/Fbmethods";
import Input from "../Component/Input";
import DonorData from "./DonorData";

export default function DonorForm() {
  const [model, setModel] = useState({});
  const [donorData, setDonorData] = useState([]);

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };

  const signUpUser = () => {
    console.log(model);
    fbLogin(model)
      .then((res) => {
        console.log(res);
        setDonorData([...donorData, model]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid gbcolor">
      <div className="container">
        <h1 className="pt-3 bg-transparent fs-2">
          <b className="text-white ">Donation Form</b>
        </h1>
        <hr className="w-25 text-center custom-hr" />
      </div>
      <div className="container-fluid m-auto py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto border rounded p-2 shadow">
              <h1 className="login fs-3">Donate Your Blood</h1>

              <div className="text-white">
                <Input
                  onChange={(e) => fillModel("Name", e.target.value)}
                  label="Full Name"
                  type="text"
                />
              </div>

              <div className="text-white">
                <Input
                  onChange={(e) => fillModel("Address", e.target.value)}
                  label="Address"
                  type="text"
                />
              </div>

              <div className="text-white">
                <Input
                  onChange={(e) => fillModel("Phone Num", e.target.value)}
                  label="Phone Num"
                  type="text"
                />
              </div>

              <div className="text-white">
                <Input
                  onChange={(e) => fillModel("Blood Group", e.target.value)}
                  label="Blood Group"
                  type="text"
                />
              </div>

              <div className="text-white">
                <Input
                  onChange={(e) => fillModel("Gender", e.target.value)}
                  label="Gender"
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

              <Buttons onClick={signUpUser} label="Donate" />
            </div>
          </div>
        </div>
      </div>

      <DonorData donorData={donorData} />
    </div>
  );
}
