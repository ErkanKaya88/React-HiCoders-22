import React, { useState } from "react";

function ParticipantForm({ getData, postData }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const person = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    e.preventDefault();

    if (firstName !== "" && lastName !== "" && email !== "") {
      postData(person);
      setFirstName("");
      setLastName("");
      setEmail("");
    }
  };

  return (
    <>
      <h1>Add participant</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
        <label for="lname">Email:</label>
        <br />
        <input
          type="email"
          id="lname"
          name="lname"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        <button
          data-testid="add-button"
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}
export default ParticipantForm;
