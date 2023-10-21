// DonorTable.js

import React from "react";

export default function DonorData({ donorData }) {
  return (
    <div className="container">
      <h1 className="pt-3 bg-transparent fs-2">
        <b className="text-dark ">Donor Information</b>
      </h1>
      <table className="table text-white">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Num</th>
            <th>Blood Group</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {donorData.map((data, index) => (
            <tr key={index}>
              <td>{data.Name}</td>
              <td>{data.Address}</td>
              <td>{data["Phone Num"]}</td>
              <td>{data["Blood Group"]}</td>
              <td>{data.Gender}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
