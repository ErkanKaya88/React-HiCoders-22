import React, { useState } from "react";
import { BASE_URL } from "../config/config";

function ParticipantForm({
  getData,
  isClicked,
  setIsClicked,
  formState,
  setFormState,
  updateData,
}) {
  const clearFields = () =>
    setFormState({ first_name: "", last_name: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const participant = {
      first_name: formState.first_name,
      last_name: formState.last_name,
      email: formState.email,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(participant),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(BASE_URL, options);
    const json = await response.json();
    if (response.ok) {
      console.log(json);
      getData();
      clearFields();
    } else {
      console.error(json);
    }
    setIsClicked(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add participant</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          name="first_name"
          onChange={handleChange}
          value={formState.first_name}
          aria-describedby="emailHelp"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          name="last_name"
          onChange={handleChange}
          value={formState.last_name}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Email
        </label>
        <input
          className="form-control"
          id="exampleInputPassword1"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
      </div>
      {!isClicked ? (
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      ) : (
        <div>
          <button type="submit" className="btn btn-success me-3">
            Update
          </button>
          <button type="" className="btn btn-danger">
            Cancel
          </button>
        </div>
      )}
    </form>
  );
}
export default ParticipantForm;
