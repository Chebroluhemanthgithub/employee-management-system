import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

function AddEmployee() {
  const [form, setForm] = useState({ name: "", role: "", salary: "" });

  const submit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.role || !form.salary) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post(`${API_URL}/api/employees`, form);
      alert("Employee Added Successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("Failed to add employee!");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <form onSubmit={submit} style={{ marginBottom: "30px" }}>
        <h2>Add Employee</h2>

        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter employee name"
          style={{ padding: "8px", width: "300px", marginBottom: "10px" }}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <label>Role:</label>
        <input
          type="text"
          placeholder="Enter role (ex: Developer)"
          style={{ padding: "8px", width: "300px", marginBottom: "10px" }}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />

        <label>Salary:</label>
        <input
          type="number"
          placeholder="Enter salary"
          style={{ padding: "8px", width: "300px", marginBottom: "10px" }}
          onChange={(e) => setForm({ ...form, salary: Number(e.target.value) })}
        />

        <button type="submit" style={{ padding: "10px 20px" }}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
