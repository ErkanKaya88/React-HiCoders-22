import React, { useEffect, useState } from "react";
import UserlList from "./components/UserlList";
import "./App.css";
import Loading from "./components/Loading";

function App() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      {isLoading && <Loading />}
      {!isLoading && <UserlList user={user} />}
    </div>
  );
}

export default App;
