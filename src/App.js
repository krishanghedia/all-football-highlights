import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../src/Styles/base.scss";
import "../src/Styles/header.scss";
import "../src/Styles/content.scss";
import "../src/Styles/mixins.scss";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getHighlightsData();
  }, []);

  const getHighlightsData = async () => {
    try {
      const data = await axios.get(process.env.REACT_APP_API_KEY);
      setData(data.data.response);
    } catch (error) {
      console.log("An unexpected error occured", error);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <div className="highlights">
        {data ? <Content data={data} /> : <p>Highlights unavailable</p>}
      </div>
    </div>
  );
}

export default App;
