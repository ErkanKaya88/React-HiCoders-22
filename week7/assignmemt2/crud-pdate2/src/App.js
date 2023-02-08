import { useEffect, useState } from "react";
import ParticipantForm from "./components/ParticipantForm";
import ParticipantTable from "./components/ParticipantTable";
import { BASE_URL } from "./config/config";

function App() {
  const [participants, setParticipant] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const getData = async () => {
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      if (response.ok) {
        setParticipant(json);
      }
    } catch (error) {
      setError(error);
      console.error(participants);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const updateData = async (pId) => {
    const res = await fetch(
      `http://dev.hicoders.cloud/playground/api/v1/User/${pId}`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      }
    );
    const data = await res.json();
    return data;
  };

  if (loading) {
    return <p style={{ color: "white" }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "white" }}>An error occurred: {error.message}</p>;
  }

  return (
    <div className="App m-5 p-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12  text-start ">
            <ParticipantForm
              getData={getData}
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              formState={formState}
              setFormState={setFormState}
              updateData={updateData}
            />
          </div>
          <div className="col-lg-7  col-12">
            <ParticipantTable
              participants={participants}
              getData={getData}
              setIsClicked={setIsClicked}
              updateData={updateData}
              formState={formState}
              setFormState={setFormState}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
