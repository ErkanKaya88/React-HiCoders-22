import React from "react";
import { useState, useEffect } from "react";
import ParticipantForm from "./components/ParticipantForm";
import ParticipantTable from "./components/ParticipantTable";

function App() {
  const [participants, setParticipant] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "http://dev.hicoders.cloud/playground/api/v1/User"
      );
      const data = await response.json();
      setParticipant(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const postData = async (data) => {
    const newPerson = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
    };
    await fetch("http://dev.hicoders.cloud/playground/api/v1/User", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    });
    await getData();
  };

  //it is a good idea to fetch the data in app.js so every component has access to the fetched data

  return (
    <div className="App m-5 p-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12  text-start ">
            <ParticipantForm getData={getData} postData={postData} />
          </div>
          <div className="col-lg-7  col-12">
            <ParticipantTable participants={participants} getData={getData} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
