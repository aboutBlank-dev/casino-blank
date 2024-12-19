import { useEffect } from "react";
import "./App.css";

function App() {
  const fetchData = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    console.log(data.message);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>React App</h1>
    </div>
  );
}

export default App;
