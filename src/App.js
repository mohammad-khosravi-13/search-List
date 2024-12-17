import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hedere from "./components/Hedere";
import Form from "./components/Form";
import Tabele from "./components/Tabele";

function App() {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [age, setAge] = useState("");
  const [languages, setLanguages] = useState({
    HTML: false,
    React: false,
    CSS: false,
  });
  const [tableData, setTableData] = useState([]);
  const AddTable = () => {
    if (name == "" || family == "" || age == "") {
      alert("نکن");
      return;
    }
    const newRecord = {
      name,
      family,
      age,
      languages: Object.keys(languages).filter(
        (language) => languages[language]
      ),
    };

    setTableData([...tableData, newRecord]);
    setName("");
    setFamily("");
    setAge("");
    setLanguages({
      HTML: false,
      React: false,
      CSS: false,
    });
  };

  return (
    <div>
      <Navbar />
      <Hedere />
      <Form
        name={name}
        setName={setName}
        family={family}
        setFamily={setFamily}
        age={age}
        setAge={setAge}
        languages={languages}
        setLanguages={setLanguages}
        onAdd={AddTable}
      />
      <Tabele tableData={tableData} />
    </div>
  );
}

export default App;
