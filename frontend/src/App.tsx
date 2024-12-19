import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    setMessage(data.message);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
