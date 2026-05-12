import React, { useState } from "react";
import "./style.css";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  let [formData, setFormData] = useState([]);
  let [id, setId] = useState(0);

  let totalArray = formData.map((item) => {
    return Number(item.amount);
  });

  let sum = totalArray.reduce((acc, curr) => Number(acc) + Number(curr), 0);

  console.log(`sum total is: ${sum}`);

  let [selected, setSelected] = useState("");

  let newArray =
    selected === ""
      ? formData
      : formData.filter((item) => {
          return item.category === selected;
        });

  let filteredData = newArray;

  let selectByCategory = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="bg-[#191919] text-white min-h-screen p-4">
      <div className="flex flex-col ">
        <p className="text-white text-4xl font-bold text-center">
          Expense Tracker
        </p>
        Current selected: {selected}
        <Form
          formData={formData}
          setFormData={setFormData}
          id={id}
          setId={setId}
        />
        <select
          onChange={selectByCategory}
          className="bg-linear-to-r w-[30%] mx-auto my-10  from-pink-400 to-emerald-800 text-black p-2 rounded-lg"
        >
          <option></option>
          <option value="Food">Food</option>
          <option value="Gadgets">Gadgets</option>
          <option value="Fashion">Fashion</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>


        <Table
          formData={formData}
          setFormData={setFormData}
          id={id}
          setId={setId}
          filteredData={filteredData}
        />
        <p className="text-center text-4xl m-6">Total: {sum}</p>
      </div>
    </div>
  );
};

export default App;
